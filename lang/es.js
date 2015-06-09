i18n.map('es', {
  lib: {
    votes: 'Votos',
    notLoggedInAlert: 'Necesitas autenticarte',
    login: 'Autenticarse',
    verifyEmail: 'Necesitas verificar el email',
    resendVerificationEmail: 'Reenviar email de verificación',
    yes: 'Si',
    no: 'No',
    abstention: 'Abstención',
    viewTopic: 'Discutir',
    login: 'Autenticarse',
    logout: 'Desconectarse',
    verifyEmailSent: 'Email enviado',
    topicHidden: 'Este tema esta cerrado'
  },
  errors: {
    emailNotEndsWith: 'El email debe terminar con {$1}',
    emailLinkExpired: 'El link de verificación ha vencido',
    questionNotExists: 'Esta pregunta no existe',
    alreadyVoted: 'El usuario ya votó',
    mustVerify: 'El usuario debe verificar el email para votar',
    topicHidden: 'El tema ya fué cerrado'
  },
  emails: {
    verifyEmail: {
      subject: 'Confirmar Email',
      html: '<h1>{$1}</h1><p>Hola {$2}!</p><p>Para verificar tu email haz click en el siguente link.</p><p><a href="{$3}">Verificar Email</a></p>'
    },
    resetPassword: {
      subject: 'Reiniciar Contraseña',
      text: 'Hola {$1}!,\n\nPara reiniciar tu contraseña haz click en el siguente link.\n\n{$2}\n'
    },
    newTopic: {
      subject: 'Nuevo Tema',
      html: '<h1>{$1}</h1><p>Hola {$2}!</p><p>Hay un nuevo tema para discutir.</p><h3><a href="{$3}">{$4}</a></h3><p><i>{$5}</i></p>'
    }
  },
  dictionary: {
    basic: {
      title: 'Título del sitio'
    },
    footer: {
      title: 'Título en el footer',
      text: 'Texto en el footer',
      pagesTitle: 'Título de las páginas en el footer'
    }
  },
  pages: {
    schema: {
      content: 'Contenido'
    }
  },
  topics: {
    singularName: 'tema',
    pluralName: 'temas',
    title: 'Temas',
    schema: {
      title: 'Título',
      description: 'Descripción',
      slug: 'Url',
      hidden: 'Desactivado',
      content: 'Contenido'
    }
  },
  questions: {
    singularName: 'pregunta',
    pluralName: 'preguntas',
    title: 'Preguntas',
    schema: {
      topic: 'Tema',
      title: 'Pregunta',
      
    }
  },
  votes: {
    singularName: 'voto',
    pluralName: 'votos',
    title: 'Votos',
  }
});