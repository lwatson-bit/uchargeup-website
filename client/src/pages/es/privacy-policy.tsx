import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Política de Privacidad
              </h1>
              <p className="text-gray-500 mb-2">Última actualización: 27 de agosto de 2026</p>
              <p className="text-gray-500 mb-12">
                <a href="/privacy-policy" className="text-brand-blue hover:underline">
                  English
                </a>
              </p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-8">
                  U Charge Up, Inc. ("U Charge Up," "nosotros") ofrece aplicaciones móviles y servicios de estaciones de carga que permiten a los usuarios alquilar baterías portátiles (power bank) y gestionar sus alquileres. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestra aplicación móvil, sitio web y estaciones (en conjunto, los "Servicios").
                </p>
                <p className="text-lg leading-relaxed mb-12">
                  Al utilizar los Servicios, usted acepta las prácticas descritas en esta Política de Privacidad.
                </p>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Información que recopilamos</h2>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">A. Información que usted proporciona</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Información de la cuenta:</strong> número de teléfono y/o dirección de correo electrónico; nombre, si lo agrega a su perfil; foto de perfil, si sube una.</li>
                    <li><strong>Proveedores de inicio de sesión:</strong> si usted inicia sesión con Apple, Google o Facebook, recibimos su nombre, dirección de correo electrónico (o la dirección de retransmisión privada de Apple) y un identificador de cuenta de ese proveedor. Nunca recibimos su contraseña.</li>
                    <li><strong>Información de pago:</strong> procesada de forma segura por nuestro proveedor de pagos externo (Stripe, y cuando esté disponible, Apple Pay y Google Pay). El número completo de su tarjeta se envía directamente al procesador de pagos y nunca se almacena en nuestros servidores; conservamos únicamente una referencia tokenizada, la marca de la tarjeta y los últimos cuatro dígitos para que pueda reconocer su tarjeta guardada.</li>
                    <li><strong>Solicitudes de soporte:</strong> mensajes y cualquier fotografía que usted decida adjuntar al contactar a servicio al cliente.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">B. Información recopilada automáticamente</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Ubicación:</strong> la ubicación precisa de su dispositivo, con su permiso y únicamente mientras utiliza la app, para mostrarle las estaciones de U Charge Up cercanas. No recopilamos ubicación en segundo plano. Usted puede desactivar los servicios de ubicación en cualquier momento desde la configuración de su dispositivo.</li>
                    <li><strong>Actividad de alquiler:</strong> de qué estaciones alquila y a cuáles devuelve, horarios de alquiler y montos cobrados.</li>
                    <li><strong>Información del dispositivo:</strong> modelo del dispositivo, sistema operativo, tipo de navegador, versión de la app, idioma e identificadores necesarios para las notificaciones push.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">C. Cámara y fotografías</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>La cámara se utiliza únicamente para escanear los códigos QR de las estaciones. El acceso a la galería de fotos se utiliza únicamente cuando usted decide adjuntar fotografías a una solicitud de soporte. Las imágenes no se recopilan para ningún otro fin.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">D. Información de terceros</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Datos del procesador de pagos (Stripe):</strong> estado del pago, reembolsos y señales de prevención de fraude.</li>
                    <li><strong>Proveedores de análisis:</strong> datos de uso agregados que nos ayudan a mejorar el rendimiento y la confiabilidad de la app.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Cómo usamos su información</h2>
                  <p className="mb-4">Usamos la información que recopilamos para:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>proporcionar y operar los Servicios: iniciar y finalizar alquileres, entregar baterías portátiles, procesar pagos y administrar depósitos y pases;</li>
                    <li>mostrarle las estaciones cercanas y su disponibilidad;</li>
                    <li>comunicarnos con usted: códigos de verificación, recibos de alquiler, notificaciones del servicio y respuestas a solicitudes de soporte;</li>
                    <li>detectar y prevenir fraude o uso indebido, hacer cumplir nuestros Términos de Servicio y cobrar los montos adeudados;</li>
                    <li>mejorar el rendimiento de la app, el funcionamiento de las estaciones y la experiencia del usuario;</li>
                    <li>cumplir con obligaciones legales.</li>
                  </ul>
                  <p className="font-semibold text-brand-blue">No vendemos sus datos personales, y no usamos su información para publicidad de terceros.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Cómo compartimos su información</h2>
                  <p className="mb-4">Podemos compartir información únicamente con:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Procesadores de pago</strong> (Stripe; Apple Pay / Google Pay cuando se utilicen) — para procesar sus pagos.</li>
                    <li><strong>Proveedores de servicios</strong> que operan partes de los Servicios para nosotros: alojamiento en la nube, Google Maps (mapas de estaciones), Firebase (inicio de sesión y notificaciones push) y herramientas de servicio al cliente. Estos proveedores solo pueden procesar su información para prestarnos sus servicios.</li>
                    <li><strong>Socios de establecimientos:</strong> los establecimientos que alojan nuestras estaciones reciben estadísticas de uso agregadas (por ejemplo, alquileres por día en su establecimiento) e información operativa necesaria para confirmar devoluciones o resolver disputas. No reciben su información de contacto.</li>
                    <li><strong>Autoridades:</strong> cuando lo exija la ley aplicable o un proceso legal, o para proteger los derechos, la seguridad o los bienes de U Charge Up, nuestros usuarios o el público.</li>
                    <li><strong>Transferencias comerciales:</strong> si estamos involucrados en una fusión, adquisición o venta de activos, la información podrá transferirse con protecciones razonables.</li>
                  </ul>
                  <p className="font-semibold">No compartimos información personal con redes publicitarias ni corredores de datos.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cookies y tecnologías de seguimiento</h2>
                  <p>
                    Nuestro sitio web puede usar cookies y tecnologías similares para mantener su sesión, analizar el rendimiento del sitio y mejorar la experiencia del usuario. Nuestra aplicación móvil utiliza herramientas de análisis que recopilan datos de uso anonimizados. No utilizamos seguimiento entre aplicaciones con fines publicitarios.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Conservación de datos</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>La información de la cuenta se conserva mientras su cuenta esté activa.</li>
                    <li>Los registros de alquiler y pago se conservan según lo requerido para fines contables, tributarios y de resolución de disputas (hasta 7 años), incluso después de eliminar la cuenta.</li>
                    <li>Las conversaciones de soporte se conservan hasta por 2 años.</li>
                    <li>Cuando usted elimina su cuenta en la App (Configuración → Eliminar cuenta), su cuenta se desactiva permanentemente, se eliminan sus métodos de pago guardados y su identificador de cuenta se desvincula de la app. Los registros de alquiler y pago asociados con la cuenta se conservan únicamente según lo descrito anteriormente.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Seguridad de los datos</h2>
                  <p>
                    Protegemos su información mediante cifrado en tránsito, controles de acceso y tokenización de pagos. Ningún sistema es completamente seguro; si tenemos conocimiento de una filtración que afecte su información personal, se lo notificaremos conforme lo exija la ley.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Sus derechos y opciones</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>
                      <strong>Acceso, corrección, eliminación:</strong> usted puede ver y editar su perfil en la App y eliminar su cuenta en Configuración → Eliminar cuenta, o contactarnos a{" "}
                      <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                        support@uchargeup.com
                      </a>
                      .
                    </li>
                    <li><strong>Ubicación:</strong> usted puede desactivar el permiso de ubicación en la configuración de su dispositivo; el mapa y las funciones de estaciones cercanas no funcionarán sin él.</li>
                    <li><strong>Notificaciones push:</strong> usted puede desactivarlas en la configuración de su dispositivo.</li>
                    <li><strong>Marketing:</strong> enviamos mensajes de marketing únicamente cuando está permitido, y usted puede darse de baja en cualquier momento.</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Residentes de Estados Unidos:</strong> según su estado, usted puede tener derechos adicionales conforme a las leyes estatales de privacidad (como acceso, eliminación y portabilidad). Contáctenos para ejercerlos; no lo discriminaremos por hacerlo.
                  </p>
                  <p>
                    <strong>Residentes de Colombia:</strong> tratamos los datos personales de conformidad con la Ley 1581 de 2012 y sus decretos reglamentarios (habeas data). Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales, y a revocar el consentimiento, escribiendo a{" "}
                    <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                      support@uchargeup.com
                    </a>
                    . Las solicitudes se atienden dentro de los términos establecidos por la ley colombiana.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Privacidad de menores</h2>
                  <p>
                    Los Servicios no están dirigidos a menores de 13 años (o la edad mínima en su jurisdicción), y no recopilamos a sabiendas su información. Si usted cree que un menor nos ha proporcionado información, contáctenos y la eliminaremos.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Usuarios internacionales</h2>
                  <p>
                    Estamos ubicados en los Estados Unidos y procesamos datos en servidores ubicados en los Estados Unidos. Si usted utiliza los Servicios desde otro país (incluyendo Colombia), su información será transferida y procesada en los Estados Unidos bajo protecciones acordes con esta Política.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Cambios a esta Política de Privacidad</h2>
                  <p>
                    Podemos actualizar esta Política de vez en cuando. Los cambios sustanciales se anunciarán en la App o por correo electrónico antes de que entren en vigencia. La versión vigente siempre está disponible en la App y en{" "}
                    <a href="https://uchargeup.com/privacy-policy" className="text-brand-blue hover:underline">
                      uchargeup.com/privacy-policy
                    </a>
                    .
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contáctenos</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-semibold text-gray-900 mb-2">U Charge Up, Inc.</p>
                    <p className="mb-1">
                      <strong>Correo electrónico:</strong>{" "}
                      <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                        support@uchargeup.com
                      </a>
                    </p>
                    <p>
                      <strong>Sitio web:</strong>{" "}
                      <a href="https://www.uchargeup.com" className="text-brand-blue hover:underline">
                        uchargeup.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}
