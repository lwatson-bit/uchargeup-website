import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServicePageEs() {
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
                Términos de Servicio
              </h1>
              <p className="text-gray-500 mb-2">Fecha de vigencia: 27 de agosto de 2026</p>
              <p className="text-gray-500 mb-12">
                <a href="/terms-of-service" className="text-brand-blue hover:underline">
                  English
                </a>
              </p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-12">
                  Estos Términos de Servicio ("Términos") constituyen un acuerdo vinculante entre usted y U Charge Up, Inc. ("U Charge Up," "nosotros"). Rigen su uso de la aplicación móvil de U Charge Up (la "App"), nuestras estaciones de carga y nuestro servicio de alquiler de baterías portátiles (power bank) (en conjunto, el "Servicio"). Al crear una cuenta o alquilar una batería portátil, usted acepta estos Términos y nuestra Política de Privacidad.
                </p>
                <p className="text-lg leading-relaxed mb-12">
                  Si no está de acuerdo, no utilice el Servicio.
                </p>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. El Servicio</h2>
                  <p>
                    U Charge Up alquila baterías portátiles para cargar teléfonos desde estaciones de autoservicio ubicadas en establecimientos participantes. Usted escanea el código QR de una estación con la App, la estación entrega una batería portátil, y usted la devuelve en cualquier estación de U Charge Up disponible cuando termine.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Elegibilidad y su cuenta</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Usted debe tener al menos 18 años (o la mayoría de edad en su lugar de residencia) para crear una cuenta y alquilar.</li>
                    <li>Usted debe proporcionar información de contacto precisa y mantenerla actualizada. Su cuenta es personal; no comparta sus credenciales de acceso ni permita que otras personas alquilen usando su cuenta.</li>
                    <li>
                      Usted es responsable de toda la actividad en su cuenta. Comuníquese con nosotros de inmediato a{" "}
                      <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                        support@uchargeup.com
                      </a>{" "}
                      si cree que su cuenta ha sido comprometida.
                    </li>
                    <li>Usted puede eliminar su cuenta en cualquier momento desde la App (Configuración → Eliminar cuenta). Los alquileres pendientes y los cargos no pagados deben resolverse primero.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones de alquiler</h2>
                  <p className="mb-4">
                    <strong>3.1 Inicio del alquiler.</strong> Un alquiler comienza cuando la estación le entrega una batería portátil y termina cuando la batería portátil se reinserta por completo en una estación de U Charge Up y es aceptada por esta.
                  </p>
                  <p className="mb-4">
                    <strong>3.2 Tarifas.</strong> Las tarifas de alquiler se muestran en la App antes de que usted confirme cada alquiler y pueden variar según el establecimiento (por ejemplo, una tarifa por cada 30 minutos con un máximo diario). El precio mostrado al inicio de su alquiler es el que se le aplicará.
                  </p>
                  <p className="mb-4">
                    <strong>3.3 Retención de depósito.</strong> Al iniciar un alquiler, colocamos una autorización temporal (retención) en su método de pago —normalmente <strong>US $20</strong>— para garantizar la batería portátil. Esto es una retención, no un cargo. Cuando usted devuelve la batería portátil a tiempo, la retención se libera y únicamente se le cobra la tarifa de alquiler real. El tiempo de liberación posterior depende de su banco, típicamente entre 1 y 10 días hábiles.
                  </p>
                  <p className="mb-4">
                    <strong>3.4 Devolución.</strong> Devuelva la batería portátil empujándola firmemente en una ranura vacía de cualquier estación de U Charge Up hasta que la estación la acepte. El tiempo de alquiler se detiene únicamente cuando la estación registra la devolución. Si una estación está llena o no está disponible, use la App para encontrar la estación alternativa más cercana.
                  </p>
                  <p className="mb-4">
                    <strong>3.5 Devoluciones tardías, no devoluciones y baterías portátiles perdidas.</strong> Si una batería portátil no se devuelve dentro de <strong>30 días</strong>, o si usted la reporta como perdida o robada, el alquiler se tratará como una compra de la batería portátil y le cobraremos la tarifa de reemplazo indicada en la App —actualmente <strong className="text-gray-900">US $129</strong>— más las tarifas de alquiler acumuladas hasta el límite aplicable, usando el método de pago registrado en su cuenta. Una vez cobrada la tarifa de reemplazo, la batería portátil pasa a ser suya y no se acumularán más tarifas de alquiler.
                  </p>
                  <p>
                    <strong>3.6 Equipo dañado.</strong> Usted es responsable de los daños a una batería portátil que excedan el desgaste normal mientras esté alquilada a su nombre (por ejemplo, daño por agua o un cable cortado). Podemos cobrar hasta la tarifa de reemplazo indicada en la Sección 3.5 por una batería portátil devuelta con daños que excedan un uso razonable.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pase Ilimitado</h2>
                  <p className="mb-4">
                    <strong>4.1 Qué es.</strong> El Pase Ilimitado es un pase prepagado que hace que los alquileres sean gratuitos en las estaciones incluidas durante un período fijo (por ejemplo, un pase de 1 día o de 3 días). Las ubicaciones incluidas, los precios del pase y las duraciones se muestran en la App antes de la compra.
                  </p>
                  <p className="mb-4">
                    <strong>4.2 Cómo funciona.</strong> Mientras su pase esté activo, los alquileres que usted inicie en las estaciones incluidas no generan tarifa de alquiler. Usted puede tener una batería portátil a la vez; puede cambiarla con la frecuencia que desee. La retención de depósito de la Sección 3.3 se sigue aplicando a cada alquiler, y las disposiciones sobre devoluciones tardías, pérdida y daño de las Secciones 3.5–3.6 siguen aplicándose en su totalidad: un pase cubre únicamente las tarifas de alquiler, no el equipo perdido o dañado.
                  </p>
                  <p className="mb-4">
                    <strong>4.3 Vigencia.</strong> Un pase comienza al momento de la compra y expira al final de su período indicado. Un alquiler iniciado antes del vencimiento queda cubierto; un alquiler iniciado después del vencimiento se cobra a las tarifas normales. Los pases no son transferibles.
                  </p>
                  <p>
                    <strong>4.4 Reembolsos.</strong> Las compras de pases no son reembolsables una vez que el período del pase ha comenzado, salvo que la ley lo exija o que no logremos prestar el Servicio (ver Sección 6).
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pagos</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Los pagos son procesados por proveedores de pago externos (actualmente Stripe, y cuando esté disponible, Apple Pay y Google Pay). No almacenamos el número completo de su tarjeta.</li>
                    <li>Usted nos autoriza a cobrar a su método de pago guardado las tarifas de alquiler, las compras de pases, las tarifas de reemplazo y otros montos en los que incurra conforme a estos Términos, incluso después de finalizado un alquiler (por ejemplo, una tarifa por devolución tardía).</li>
                    <li>Si un cargo falla, podemos reintentarlo y podemos suspender su capacidad de alquilar hasta que se paguen los montos pendientes.</li>
                    <li>Los precios se muestran en la moneda indicada en la App. El emisor de su tarjeta puede aplicar comisiones por transacciones en el extranjero; esas comisiones no las cobramos nosotros.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Reembolsos y problemas del servicio</h2>
                  <p>
                    Si una estación no logra entregar una batería portátil, entrega una defectuosa (por ejemplo, que no carga su teléfono), o no logra registrar una devolución sin que sea culpa suya, comuníquese con nosotros a{" "}
                    <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                      support@uchargeup.com
                    </a>
                    . Corregiremos el cargo —incluyendo el reembolso de tarifas de alquiler o la liberación de retenciones de depósito— cuando nuestro Servicio no haya funcionado según lo descrito. Los reembolsos se emiten al método de pago original.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Uso aceptable</h2>
                  <p className="mb-4">Usted se compromete a no:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>dañar, desarmar o manipular baterías portátiles o estaciones;</li>
                    <li>usar el Servicio para cualquier fin ilícito;</li>
                    <li>interferir con el funcionamiento de la App o intentar acceder a ella por cualquier medio distinto de la App misma;</li>
                    <li>revender alquileres o pases.</li>
                  </ul>
                  <p>Podemos suspender o cancelar cuentas que infrinjan estos Términos, y los cargos pendientes subsistirán tras la cancelación.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. La App</h2>
                  <p>
                    Le otorgamos una licencia personal, no exclusiva y revocable para usar la App y acceder al Servicio. La App, nuestra marca y nuestro contenido son de nuestra propiedad o de nuestros licenciantes. La App requiere permisos de ubicación, cámara y red para funcionar completamente; usted puede rechazar estos permisos, pero algunas partes del Servicio podrían no funcionar.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Renuncia de garantías</h2>
                  <p>
                    El Servicio se proporciona "tal cual" y "según disponibilidad". La disponibilidad de baterías portátiles en cualquier estación no está garantizada. En la máxima medida permitida por la ley, renunciamos a todas las garantías, expresas o implícitas, incluyendo comerciabilidad, idoneidad para un fin particular y no infracción. No somos responsables de daños a su dispositivo causados por el uso indebido de una batería portátil contrario a sus indicaciones o instrucciones.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitación de responsabilidad</h2>
                  <p>
                    En la máxima medida permitida por la ley: (a) nuestra responsabilidad total por cualquier reclamo derivado de o relacionado con el Servicio se limita al mayor entre US $100 o los montos que usted nos haya pagado en los 12 meses previos al reclamo; y (b) no somos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, ni por pérdida de ganancias o de datos. Algunas jurisdicciones no permiten ciertas limitaciones; en esos lugares, estos límites se aplicarán en la medida permitida.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnización</h2>
                  <p>
                    Usted nos indemnizará y nos mantendrá libres de responsabilidad frente a reclamos y gastos (incluyendo honorarios razonables de abogados) que surjan de su uso indebido del Servicio o de la infracción de estos Términos.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Ley aplicable y controversias</h2>
                  <p className="mb-4">
                    Estos Términos se rigen por las leyes del Estado de Michigan, sin dar efecto a sus normas sobre conflicto de leyes. Las controversias se resolverán en los tribunales estatales o federales ubicados en el condado de Wayne, Michigan, y usted consiente a su jurisdicción.
                  </p>
                  <p>
                    <strong>Consumidores fuera de los Estados Unidos.</strong> Si usted utiliza el Servicio en un país cuyas leyes le otorgan protecciones obligatorias al consumidor (incluyendo el Estatuto del Consumidor de Colombia, Ley 1480 de 2011), nada en estos Términos limita esos derechos, y usted también puede recurrir a las autoridades y tribunales locales de protección al consumidor.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Cambios</h2>
                  <p>
                    Podemos actualizar estos Términos de vez en cuando. Si realizamos cambios sustanciales, se lo notificaremos en la App o por correo electrónico antes de que entren en vigencia. El uso continuado del Servicio después de la fecha de vigencia constituye aceptación. La versión vigente siempre está disponible en la App y en{" "}
                    <a href="https://uchargeup.com/terms-of-service" className="text-brand-blue hover:underline">
                      uchargeup.com/terms-of-service
                    </a>
                    .
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Contacto</h2>
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
