
/* نظام الحسابات لمنارة التعليم الجزائري */
(() => {
  "use strict";

  const SUPABASE_URL = "https://mqkqejkbzupggbiwbrky.supabase.co";
  const SUPABASE_KEY = "sb_publishable_jX31k9zm9DMFQ5CbwBBHzA_AfSYwLqd";
  const REDIRECT_URL = "https://education-dz.github.io/examens/";

  if (!window.supabase) {
    console.error("Supabase library did not load.");
    return;
  }

  const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

  window.manaratSupabase = client;

  const style = document.createElement("style");
  style.textContent = `
    #manarat-auth-button {
      border: 0; border-radius: 10px; padding: 10px 16px;
      background: #087f5b; color: white; cursor: pointer;
      font: inherit; margin: 5px;
    }
    #manarat-auth-overlay {
      position: fixed; inset: 0; z-index: 99999;
      background: rgba(0,0,0,.65); display: none;
      align-items: center; justify-content: center; padding: 16px;
      direction: rtl;
    }
    #manarat-auth-box {
      background: var(--card-bg, #fff); color: var(--text-color, #222);
      width: min(420px, 100%); padding: 24px; border-radius: 16px;
      box-shadow: 0 10px 40px #0003; position: relative;
      font-family: inherit; max-height: 90vh; overflow: auto;
    }
    #manarat-auth-box input {
      display: block; width: 100%; box-sizing: border-box;
      padding: 12px; margin: 10px 0; border: 1px solid #ccc;
      border-radius: 8px; font: inherit;
    }
    #manarat-auth-box button {
      width: 100%; padding: 11px; margin-top: 9px;
      border: 0; border-radius: 8px; cursor: pointer; font: inherit;
    }
    #manarat-auth-submit { background: #087f5b; color: white; }
    #manarat-google { background: #f1f3f5; color: #222; }
    #manarat-auth-close {
      position: absolute; top: 8px; left: 10px;
      width: auto !important; background: transparent; font-size: 22px;
    }
    #manarat-auth-message { white-space: pre-wrap; font-size: 14px; }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "manarat-auth-overlay";
  overlay.innerHTML = `
    <section id="manarat-auth-box" role="dialog"
      aria-modal="true" aria-labelledby="manarat-auth-title">
      <button type="button" id="manarat-auth-close"
        aria-label="إغلاق">×</button>
      <h2 id="manarat-auth-title">حسابك في منارة التعليم</h2>
      <p id="manarat-auth-description">سجّل الدخول أو أنشئ حسابًا جديدًا.</p>

      <form id="manarat-auth-form">
        <input id="manarat-auth-name" type="text"
          placeholder="الاسم (للحساب الجديد)" autocomplete="name"
          maxlength="80" style="display:none">
        <input id="manarat-auth-email" type="email"
          placeholder="البريد الإلكتروني" autocomplete="email" required>
        <input id="manarat-auth-password" type="password"
          placeholder="كلمة المرور (8 أحرف على الأقل)"
          autocomplete="current-password" minlength="8" required>
        <button id="manarat-auth-submit" type="submit">تسجيل الدخول</button>
      </form>

      <button id="manarat-google" type="button">
        المتابعة باستخدام Google
      </button>
      <button id="manarat-auth-mode" type="button">
        ليس لديك حساب؟ أنشئ حسابًا
      </button>
      <button id="manarat-auth-reset" type="button">
        نسيت كلمة المرور؟
      </button>
      <button id="manarat-auth-logout" type="button" style="display:none">
        تسجيل الخروج
      </button>
      <p id="manarat-auth-message" role="status" aria-live="polite"></p>
    </section>
  `;
  document.body.appendChild(overlay);

  const $ = (id) => document.getElementById(id);
  let mode = "login";
  let busy = false;

  const accountButton = document.createElement("button");
  accountButton.id = "manarat-auth-button";
  accountButton.type = "button";
  accountButton.textContent = "👤 حسابي";

  const headerActions = document.querySelector(".header-actions");
  (headerActions || document.querySelector("header") || document.body)
    .appendChild(accountButton);

  function message(text) {
    $("manarat-auth-message").textContent = text;
  }

  function openDialog() {
    overlay.style.display = "flex";
    message("");
  }

  function closeDialog() {
    overlay.style.display = "none";
  }

  function setMode(nextMode) {
    mode = nextMode;
    const loggedOut = nextMode === "login" || nextMode === "signup";

    $("manarat-auth-form").style.display = loggedOut ? "block" : "none";
    $("manarat-auth-name").style.display =
      nextMode === "signup" ? "block" : "none";
    $("manarat-auth-submit").textContent =
      nextMode === "signup" ? "إنشاء الحساب" :
      nextMode === "reset" ? "إرسال رابط الاستعادة" : "تسجيل الدخول";

    $("manarat-auth-mode").style.display =
      nextMode === "reset" ? "none" : "block";
    $("manarat-auth-reset").style.display =
      nextMode === "reset" ? "none" : "block";
    $("manarat-google").style.display = loggedOut ? "block" : "none";
    $("manarat-auth-description").textContent =
      nextMode === "signup" ? "أنشئ حسابًا جديدًا للانطلاق." :
      nextMode === "reset" ? "أدخل بريدك لإرسال رابط استعادة كلمة المرور." :
      "سجّل الدخول إلى حسابك.";

    $("manarat-auth-password").required = nextMode !== "reset";
    $("manarat-auth-password").autocomplete =
      nextMode === "signup" ? "new-password" : "current-password";

    $("manarat-auth-mode").textContent =
      nextMode === "signup" ? "لديك حساب؟ سجّل الدخول" :
      "ليس لديك حساب؟ أنشئ حسابًا";
    message("");
  }

  async function refreshAccount(user) {
    if (user) {
      const label = user.user_metadata?.full_name ||
                    user.user_metadata?.name ||
                    user.email ||
                    "حسابي";
      accountButton.textContent = `👤 ${label}`;
      $("manarat-auth-title").textContent = "مرحبًا بك في منارة التعليم";
      $("manarat-auth-description").textContent =
        `تم تسجيل الدخول بالبريد: ${user.email || "حساب Google"}`;
      $("manarat-auth-form").style.display = "none";
      $("manarat-google").style.display = "none";
      $("manarat-auth-mode").style.display = "none";
      $("manarat-auth-reset").style.display = "none";
      $("manarat-auth-logout").style.display = "block";
      message("حسابك متصل بنجاح.");
    } else {
      accountButton.textContent = "👤 حسابي";
      $("manarat-auth-title").textContent = "حسابك في منارة التعليم";
      $("manarat-auth-logout").style.display = "none";
      setMode("login");
    }
  }

  accountButton.addEventListener("click", async () => {
    const { data } = await client.auth.getSession();
    await refreshAccount(data.session?.user || null);
    openDialog();
  });

  $("manarat-auth-close").addEventListener("click", closeDialog);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeDialog();
  });

  $("manarat-auth-mode").addEventListener("click", () => {
    setMode(mode === "signup" ? "login" : "signup");
  });

  $("manarat-auth-reset").addEventListener("click", () => {
    setMode("reset");
  });

  $("manarat-auth-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy) return;

    const email = $("manarat-auth-email").value.trim();
    const password = $("manarat-auth-password").value;
    const name = $("manarat-auth-name").value.trim();

    busy = true;
    $("manarat-auth-submit").disabled = true;
    message("جارٍ المعالجة...");

    try {
      let result;

      if (mode === "signup") {
        result = await client.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name },
            emailRedirectTo: REDIRECT_URL
          }
        });
      } else if (mode === "reset") {
        result = await client.auth.resetPasswordForEmail(email, {
          redirectTo: REDIRECT_URL
        });
      } else {
        result = await client.auth.signInWithPassword({ email, password });
      }

      if (result.error) throw result.error;

      if (mode === "signup" && !result.data.session) {
        message("تم إنشاء الحساب. تفقد بريدك الإلكتروني واضغط رابط تأكيد الحساب.");
      } else if (mode === "reset") {
        message("إذا كان البريد مسجلًا، سيصلك رابط استعادة كلمة المرور.");
      } else {
        await refreshAccount(result.data.user || result.data.session?.user);
        message("تم تسجيل الدخول بنجاح.");
      }
    } catch (error) {
      message("تعذّر إكمال العملية: " + (error.message || "حدث خطأ."));
    } finally {
      busy = false;
      $("manarat-auth-submit").disabled = false;
    }
  });

  $("manarat-google").addEventListener("click", async () => {
    message("جارٍ فتح Google...");
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: REDIRECT_URL }
    });
    if (error) message("تعذّر تسجيل الدخول بـ Google: " + error.message);
  });

  $("manarat-auth-logout").addEventListener("click", async () => {
    const { error } = await client.auth.signOut();
    if (error) {
      message("تعذّر تسجيل الخروج: " + error.message);
      return;
    }
    await refreshAccount(null);
    message("تم تسجيل الخروج.");
  });

  client.auth.onAuthStateChange((_event, session) => {
    refreshAccount(session?.user || null);
  });

  client.auth.getSession().then(({ data }) => {
    refreshAccount(data.session?.user || null);
  });
})();
