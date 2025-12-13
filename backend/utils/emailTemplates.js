/**
 * Utility for generating professional email HTML templates
 */

const getPaymentSuccessTemplate = (courseTitle, paymentId, courseLink = 'https://e-learing-58b34.web.app/my-courses') => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paiement Confirmé</title>
    <style>
        body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-top: 40px; margin-bottom: 40px; }
        .header { background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); padding: 40px 20px; text-align: center; color: white; }
        .icon-circle { width: 64px; height: 64px; background-color: rgba(255,255,255,0.2); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 32px; }
        .content { padding: 40px 30px; text-align: center; color: #374151; }
        .title { margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #111827; }
        .text { margin: 0 0 24px 0; line-height: 1.6; font-size: 16px; color: #4b5563; }
        .course-card { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 24px 0; text-align: left; }
        .course-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; margin-bottom: 4px; }
        .course-title { font-size: 18px; font-weight: 600; color: #111827; margin: 0; }
        .button { display: inline-block; background-color: #10b981; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 8px; transition: background-color 0.2s; }
        .button:hover { background-color: #059669; }
        .footer { background-color: #f9fafb; padding: 24px; text-align: center; font-size: 14px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
        .details { font-size: 13px; color: #9ca3af; margin-top: 24px; border-top: 1px solid #f3f4f6; padding-top: 16px; }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="icon-circle">🎉</div>
            <h1 style="margin:0; font-size: 28px;">Paiement Confirmé !</h1>
        </div>

        <!-- Main Content -->
        <div class="content">
            <h2 class="title">Félicitations !</h2>
            <p class="text">
                Votre paiement a été traité avec succès. Vous avez rejoint notre communauté d'apprenants.
                Excellente décision pour votre avenir !
            </p>

            <!-- Course Card -->
            <div class="course-card">
                <div class="course-label">Vous avez débloqué l'accès à :</div>
                <h3 class="course-title">${courseTitle}</h3>
            </div>

            <p class="text">
                Vous pouvez commencer votre apprentissage dès maintenant, à votre rythme, sur n'importe quel appareil.
            </p>

            <!-- CTA Button -->
            <a href="${courseLink}" class="button">Commencer le cours</a>

            <!-- Payment Details -->
            <div class="details">
                Référence de transaction : <span style="font-family: monospace; color: #6b7280;">${paymentId}</span>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p style="margin:0;">L'équipe My Company</p>
            <p style="margin:8px 0 0 0; font-size: 12px;">Cet email est automatique, merci de ne pas y répondre.</p>
        </div>
    </div>
</body>
</html>
    `;
};

const getPasswordResetTemplate = (resetLink) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réinitialisation du mot de passe</title>
    <style>
        body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-top: 40px; margin-bottom: 40px; }
        .header { background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%); padding: 40px 20px; text-align: center; color: white; }
        .icon-circle { width: 64px; height: 64px; background-color: rgba(255,255,255,0.2); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 32px; }
        .content { padding: 40px 30px; text-align: center; color: #374151; }
        .title { margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #111827; }
        .text { margin: 0 0 24px 0; line-height: 1.6; font-size: 16px; color: #4b5563; }
        .button { display: inline-block; background-color: #f59e0b; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 8px; transition: background-color 0.2s; }
        .button:hover { background-color: #d97706; }
        .footer { background-color: #f9fafb; padding: 24px; text-align: center; font-size: 14px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
        .link-text { font-size: 12px; color: #9ca3af; margin-top: 24px; word-break: break-all; }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="icon-circle">🔐</div>
            <h1 style="margin:0; font-size: 28px;">Réinitialisation</h1>
        </div>

        <!-- Main Content -->
        <div class="content">
            <h2 class="title">Mot de passe oublié ?</h2>
            <p class="text">
                Nous avons reçu une demande de réinitialisation de mot de passe pour votre compte.
                Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet email.
            </p>

            <p class="text">
                Pour choisir un nouveau mot de passe, cliquez sur le bouton ci-dessous :
            </p>

            <!-- CTA Button -->
            <a href="${resetLink}" class="button">Réinitialiser mon mot de passe</a>

            <div class="link-text">
                Si le bouton ne fonctionne pas, copiez-collez ce lien :<br>
                ${resetLink}
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p style="margin:0;">L'équipe My Company</p>
            <p style="margin:8px 0 0 0; font-size: 12px;">Ce lien expirera dans 1 heure.</p>
        </div>
    </div>
</body>
</html>
    `;
};

export { getPaymentSuccessTemplate, getPasswordResetTemplate };
