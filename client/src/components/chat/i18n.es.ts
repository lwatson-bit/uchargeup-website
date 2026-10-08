// Spanish copy for Juice, keyed by the exact English string. Anything
// missing falls back to English (see i18n.ts). Keep placeholders such as
// {firstName} and {reference} exactly as written, and keep leading emoji.
export const ES: Record<string, string> = {
  // ---- widget chrome (ChatWidget.tsx)
  "Ask me anything…": "Pregúntame lo que quieras…",
  "Pick an option above": "Elige una opción de arriba",
  "Dismiss": "Descartar",
  "Need a hand? I'm Juice 🔋": "¿Necesitas ayuda? Soy Juice 🔋",
  "Close chat with Juice": "Cerrar el chat con Juice",
  "Chat with Juice, the U Charge Up helper": "Chatea con Juice, el asistente de U Charge Up",
  "Chat with Juice": "Chatea con Juice",
  "U Charge Up helper": "Asistente de U Charge Up",
  "Start over": "Empezar de nuevo",
  "Close": "Cerrar",
  "Juice is typing": "Juice está escribiendo",
  "Rental date": "Fecha del alquiler",
  "Message Juice": "Escríbele a Juice",
  "Send": "Enviar",
  "Prefer email?": "¿Prefieres correo?",
  "About": "Asunto",
  "Edit": "Editar",
  "Skip": "Omitir",

  // ---- messages and validation (useChat.ts)
  "Hmm, that didn't go through. You can try again, or email support@uchargeup.com directly and we'll pick it up there.":
    "Hmm, no se pudo enviar. Puedes intentarlo de nuevo o escribirnos directamente a support@uchargeup.com y lo retomamos por allá.",
  "That doesn't look like an email address. Mind checking it?":
    "Eso no parece un correo electrónico. ¿Puedes revisarlo?",
  "Just the last four digits, never the full card number.":
    "Solo los últimos cuatro dígitos, nunca el número completo de la tarjeta.",
  "Four digits, please. They're on the front or back of the card.":
    "Cuatro dígitos, por favor. Están en el frente o en el reverso de la tarjeta.",
  "Pick a date, or tap Today or Yesterday.": "Elige una fecha o toca Hoy o Ayer.",
  "That's in the future. Which day was the rental?": "Esa fecha es futura. ¿Qué día fue el alquiler?",
  "That's a bit long. Could you trim it to about 2,000 characters?":
    "Es un poco largo. ¿Podrías acortarlo a unos 2.000 caracteres?",
  "Could you fill that in?": "¿Podrías completar eso?",
  "I'm having trouble answering right now. Pick one of these and I'll get you to the right place.":
    "Ahora mismo tengo problemas para responder. Elige una de estas opciones y te llevo al lugar indicado.",
  "Report this charge": "Reportar este cobro",
  "Rental help": "Ayuda con el alquiler",
  "Partner with us": "Sé nuestro aliado",
  "Talk to a person": "Hablar con una persona",

  // ---- links
  "Find a kiosk": "Encontrar una estación",
  "Get the app": "Descargar la app",

  // ---- summary field labels
  "Name": "Nombre",
  "Email": "Correo",
  "Phone": "Teléfono",
  "Where": "Dónde",
  "Date": "Fecha",
  "Time": "Hora",
  "Card ending in": "Tarjeta terminada en",
  "Business": "Negocio",
  "Type of venue": "Tipo de lugar",
  "Notes": "Notas",

  // ---- shared chips
  "🔋 Trouble with a rental": "🔋 Problema con un alquiler",
  "💳 Question about a charge": "💳 Pregunta sobre un cobro",
  "🤝 Partner with us": "🤝 Sé nuestro aliado",
  "💬 Something else": "💬 Otra cosa",
  "✅ That worked": "✅ Funcionó",
  "Back to the start": "Volver al inicio",
  "Something else": "Otra cosa",
  "Start a new chat": "Iniciar un chat nuevo",

  // ---- welcome / happy
  "Great! Anything else I can help with?": "¡Genial! ¿Te ayudo con algo más?",
  "Sure, what else can I help with?": "Claro, ¿en qué más te puedo ayudar?",
  "Hi! I'm Juice, the U Charge Up helper. What can I do for you?":
    "¡Hola! Soy Juice, el asistente de U Charge Up. ¿En qué te puedo ayudar?",

  // ---- rental
  "Let's get you charged up. What's going on?": "Vamos a solucionarlo. ¿Qué está pasando?",
  "Battery didn't come out": "La batería no salió",
  "Battery won't charge my phone": "La batería no carga mi teléfono",
  "How do I return it?": "¿Cómo la devuelvo?",
  "Returned it, still shows active": "La devolví, pero sigue activa",
  "App won't scan or start": "La app no escanea o no inicia",
  "I lost the battery": "Perdí la batería",
  "Where's the nearest kiosk?": "¿Dónde está la estación más cercana?",
  "How do I rent one?": "¿Cómo alquilo una?",

  "Sorry about that, let's get you a battery. Two quick things to try:":
    "Perdón por eso, vamos a conseguirte una batería. Prueba estas dos cosas rápidas:",
  "1. Tap or scan once more at the same kiosk. A slot can stick on the first try.\n2. If nothing comes out, try a different kiosk at the venue. Any U Charge Up kiosk works.":
    "1. Toca o escanea otra vez en la misma estación. A veces una ranura se atasca al primer intento.\n2. Si no sale nada, prueba con otra estación del lugar. Sirve cualquier estación de U Charge Up.",
  "I got charged anyway": "Me cobraron de todos modos",
  "Charged but no battery came out": "Me cobraron pero no salió la batería",
  "❌ Still nothing": "❌ Sigue sin salir",

  "That's no good. Return it to any kiosk and grab a fresh one, the swap only takes a second.":
    "Qué molesto. Devuélvela en cualquier estación y toma una nueva; el cambio toma solo un segundo.",
  "If the dead one cost you rental time, send us the details and we'll take a look.":
    "Si la descargada te quitó tiempo de alquiler, envíanos los detalles y lo revisamos.",
  "✅ All set": "✅ Todo listo",
  "Send the details": "Enviar los detalles",
  "Battery wouldn't charge my phone": "La batería no cargaba mi teléfono",

  "Push the battery firmly into any empty slot at any U Charge Up kiosk until the kiosk accepts it. The rental clock stops the moment the kiosk registers the return.":
    "Empuja la batería con firmeza en cualquier ranura vacía de cualquier estación de U Charge Up hasta que la estación la acepte. El tiempo de alquiler se detiene en cuanto la estación registra la devolución.",
  "It doesn't have to be the kiosk you started at. If a kiosk is full, the app shows the nearest one with open slots.":
    "No tiene que ser la estación donde empezaste. Si una estación está llena, la app te muestra la más cercana con ranuras libres.",
  "✅ Got it": "✅ Entendido",

  "That can happen when a kiosk is briefly offline. The return usually registers on its own once it reconnects.":
    "Eso puede pasar cuando una estación se queda sin conexión por un momento. Normalmente la devolución se registra sola cuando se reconecta.",
  "Sounds good. If it's still showing as active later, come back and tap Send the details.":
    "Perfecto. Si más tarde sigue apareciendo como activa, vuelve y toca Enviar los detalles.",
  "If it's still showing as active after a few hours, send us the details and a person will look into it.":
    "Si después de unas horas sigue activa, envíanos los detalles y una persona lo revisará.",
  "Returned but still showing as active": "Devuelta pero sigue apareciendo como activa",
  "I'll check back later": "Vuelvo a revisar más tarde",

  "A couple of ways around that:": "Hay un par de formas de resolverlo:",
  "• Type in the station number printed under the QR code instead of scanning.\n• Or skip the app and tap your credit or debit card on the kiosk's reader.":
    "• Escribe el número de estación impreso debajo del código QR en lugar de escanear.\n• O, sin usar la app, acerca tu tarjeta de crédito o débito al lector de la estación.",
  "❌ Still stuck": "❌ Sigue sin funcionar",
  "App won't scan or start a rental": "La app no escanea o no inicia el alquiler",

  "Lost battery": "Batería perdida",

  "Every U Charge Up kiosk is on the map, and the app shows which ones have batteries available right now.":
    "Todas las estaciones de U Charge Up están en el mapa, y la app te muestra cuáles tienen baterías disponibles en este momento.",
  "✅ Thanks": "✅ Gracias",

  "Easy. Three steps:": "Fácil. Tres pasos:",
  "1. At the kiosk, scan the QR code with your phone or tap your credit or debit card on the reader.\n2. Grab the battery that pops out and charge with the built-in cables, wherever you go.\n3. Done? Push it into an empty slot at any U Charge Up kiosk until it clicks in.":
    "1. En la estación, escanea el código QR con tu teléfono o acerca tu tarjeta de crédito o débito al lector.\n2. Toma la batería que sale y carga con los cables integrados, vayas donde vayas.\n3. ¿Terminaste? Empújala en una ranura vacía de cualquier estación de U Charge Up hasta que encaje.",
  "A temporary hold, usually $20, goes on your card when you start and drops off after you return the battery.":
    "Al empezar se hace una retención temporal en tu tarjeta, normalmente de $20, que se libera después de devolver la batería.",
  "✅ That's all I needed": "✅ Eso era todo",
  "I have another question": "Tengo otra pregunta",

  // ---- charge
  "Happy to help with that. Which one sounds right?": "Con gusto te ayudo. ¿Cuál se parece más a tu caso?",
  "What's the hold (usually $20)?": "¿Qué es la retención (normalmente $20)?",
  "Charged more than expected": "Me cobraron más de lo esperado",
  "I want a refund": "Quiero un reembolso",
  "Refund request": "Solicitud de reembolso",
  "Something else about a charge": "Otra cosa sobre un cobro",
  "What does a rental cost?": "¿Cuánto cuesta alquilar?",
  "Prices are set by each venue. Type the name of the venue and I'll look it up.":
    "Cada lugar tiene sus propios precios. Escribe el nombre del lugar y lo busco.",
  "The app also shows the price before you rent.": "La app también te muestra el precio antes de alquilar.",
  "Question about a charge": "Pregunta sobre un cobro",

  "When you start a rental we place a temporary hold on your card, usually $20, to secure the battery. It's a hold, not a charge.":
    "Cuando empiezas un alquiler hacemos una retención temporal en tu tarjeta, normalmente de $20, para asegurar la batería. Es una retención, no un cobro.",
  "When you return the battery the hold is released and only your actual rental fee is charged. Your bank decides how fast the hold disappears, usually 1 to 10 business days.":
    "Cuando devuelves la batería se libera la retención y solo se cobra el valor real del alquiler. Tu banco decide qué tan rápido desaparece la retención, normalmente de 1 a 10 días hábiles.",
  "✅ That answers it": "✅ Eso responde mi duda",
  "I still have a question": "Todavía tengo una pregunta",
  "Question about the hold": "Pregunta sobre la retención",

  // ---- support handoff form
  "Let us take a look at the transaction and we'll get this sorted out for you. I just need a few details so a person on our team can find it.":
    "Déjanos revisar la transacción y lo resolvemos por ti. Solo necesito unos datos para que una persona de nuestro equipo pueda encontrarla.",
  "Got it, let's get a person on this. A few quick details first.":
    "Entendido, vamos a pasarte con una persona. Primero unos datos rápidos.",
  "What's your name?": "¿Cómo te llamas?",
  "Your name": "Tu nombre",
  "Thanks, {firstName}. Where were you when this happened? The venue or the city is fine.":
    "Gracias, {firstName}. ¿Dónde estabas cuando pasó? Basta con el lugar o la ciudad.",
  "Where were you when this happened? The venue or the city is fine.":
    "¿Dónde estabas cuando pasó? Basta con el lugar o la ciudad.",
  "Venue or city": "Lugar o ciudad",
  "And what day was that?": "¿Y qué día fue?",
  "Today": "Hoy",
  "Yesterday": "Ayer",
  "Roughly what time? Tap Not sure if you don't remember.":
    "¿Más o menos a qué hora? Toca No lo sé si no lo recuerdas.",
  "e.g. around 8pm": "p. ej. cerca de las 8 p. m.",
  "Not sure": "No lo sé",
  "To find your rental, what are the last 4 digits of the card you used?":
    "Para encontrar tu alquiler, ¿cuáles son los últimos 4 dígitos de la tarjeta que usaste?",
  "I didn't use a card": "No usé tarjeta",
  "Last 4 digits": "Últimos 4 dígitos",
  "Perfect. What's the best email for a person to reply to you?":
    "Perfecto. ¿Cuál es el mejor correo para que una persona te responda?",
  "you@example.com": "tu@ejemplo.com",
  "Anything else we should know?": "¿Algo más que debamos saber?",
  "Optional": "Opcional",
  "Here's what I'll send to our team:": "Esto es lo que le enviaré a nuestro equipo:",
  "Send to our team": "Enviar a nuestro equipo",
  "Sent! Your reference is {reference}.": "¡Enviado! Tu referencia es {reference}.",
  "A real person will email you back from support@uchargeup.com.":
    "Una persona real te responderá por correo desde support@uchargeup.com.",

  // ---- partner
  "Wants a kiosk at their venue": "Quiere una estación en su local",
  "That's great to hear! Let me grab a few details so the right person can reach out.":
    "¡Qué gusto! Déjame tomar unos datos para que la persona indicada se comunique contigo.",
  "Nice to meet you, {firstName}. What's the business called, and what city is it in?":
    "Mucho gusto, {firstName}. ¿Cómo se llama el negocio y en qué ciudad está?",
  "What's the business called, and what city is it in?": "¿Cómo se llama el negocio y en qué ciudad está?",
  "Business name, city": "Nombre del negocio, ciudad",
  "What kind of place is it?": "¿Qué tipo de lugar es?",
  "Bar / restaurant": "Bar / restaurante",
  "Hotel": "Hotel",
  "Stadium / arena": "Estadio / coliseo",
  "Casino": "Casino",
  "Event space": "Espacio para eventos",
  "Other": "Otro",
  "Best email to reach you?": "¿Cuál es el mejor correo para contactarte?",
  "And a phone number, if you'd rather talk?": "¿Y un número de teléfono, si prefieres hablar?",
  "Anything else you'd like us to know?": "¿Algo más que quieras contarnos?",
  "Here's what I'll pass along:": "Esto es lo que le pasaré al equipo:",
  "Send it": "Enviarlo",
  "Thanks, {firstName}! We'll be in touch soon.": "¡Gracias, {firstName}! Te contactaremos pronto.",
  "Your reference is {reference}, in case you need it.": "Tu referencia es {reference}, por si la necesitas.",

  // ---- other
  "General message": "Mensaje general",
  "Sure thing. What's your name?": "Claro que sí. ¿Cómo te llamas?",
  "Typed question for a person": "Pregunta escrita para una persona",
  "I'll make sure a person sees that. What's your name?":
    "Me aseguro de que una persona lo vea. ¿Cómo te llamas?",
  "Thanks, {firstName}. What's the best email to reply to you?":
    "Gracias, {firstName}. ¿Cuál es el mejor correo para responderte?",
  "What's the best email to reply to you?": "¿Cuál es el mejor correo para responderte?",
  "What can we help with?": "¿En qué podemos ayudarte?",
  "Tell us what's up": "Cuéntanos qué pasa",
  "Here's what I'll send:": "Esto es lo que enviaré:",
  "Updated. Here's what I'll send:": "Actualizado. Esto es lo que enviaré:",
  "Whoa, that's a lot of requests from this connection. Give it a few minutes and try again.":
    "Uy, hay muchas solicitudes desde esta conexión. Espera unos minutos e inténtalo de nuevo.",
  "That's a bit long for this box. Could you shorten it?":
    "Es un poco largo para este cuadro. ¿Podrías acortarlo?",
  "Sorry to hear that. If a battery isn't returned after {lostDays} days, a {lostFee} replacement fee applies. That's our lost or stolen fee, and the battery is yours to keep.":
    "Lo siento. Si una batería no se devuelve después de {lostDays} días, se aplica una tarifa de reposición de {lostFee}. Es nuestro cargo por pérdida o robo, y la batería pasa a ser tuya.",
  "Have a question about your charge? Send us the details and a person on our team will take a look.":
    "¿Tienes una pregunta sobre tu cobro? Envíanos los detalles y una persona de nuestro equipo lo revisará.",
  "Lost or stolen fee ({lostFee})": "Cargo por pérdida o robo ({lostFee})",
  "That's our lost or stolen fee. If a battery isn't returned after {lostDays} days, a {lostFee} replacement fee applies, and the battery is yours to keep.":
    "Ese es nuestro cargo por pérdida o robo. Si una batería no se devuelve después de {lostDays} días, se aplica una tarifa de reposición de {lostFee}, y la batería pasa a ser tuya.",
  "If you think it shouldn't apply to your rental, send us the details and a person will take a look.":
    "Si crees que no aplica a tu alquiler, envíanos los detalles y una persona lo revisará.",
  "Lost or stolen fee question": "Pregunta sobre el cargo por pérdida o robo",
};
