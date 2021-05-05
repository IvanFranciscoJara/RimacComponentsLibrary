import * as React from "react";
// import Modal from "../../lib/components/modal/modal";
// import Button from "../../lib/components/button/button";
import { Button, Modal } from "../../lib";

export const DummyModalDefault = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <button size="small" type="primary" onClick={() => setOpenModal(true)}>
        Abre el modal
      </button>
      {openModal && (
        <Modal closeModal={setOpenModal} size="15" iconColor="RED">
          <p style={{ textAlign: "center" }}>Some text</p>
          <p style={{ textAlign: "center" }}>¿Some text?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" type="primary">
              TEXTO
            </Button>
            <Button size="small" type="secondary">
              OTRO TEXTO
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export const DummyModalTerms = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <button size="small" type="primary" onClick={() => setOpenModal(true)}>
        Abre el modal términos
      </button>
      {openModal && (
        <Modal
          type="terms"
          titleText="TÉRMINOS Y CONDICIONES"
          closeModal={setOpenModal}
          size="31"
          iconColor="RED"
        >
          Es requisito necesario para la adquisición de los productos que se
          ofrecen en este sitio, que lea y acepte los siguientes Términos y
          Condiciones que a continuación se redactan. El uso de nuestros
          servicios así como la compra de nuestros productos implicará que usted
          ha leído y aceptado los Términos y Condiciones de Uso en el presente
          documento. Todas los productos que son ofrecidos por nuestro sitio web
          pudieran ser creadas, cobradas, enviadas o presentadas por una página
          web tercera y en tal caso estarían sujetas a sus propios Términos y
          Condiciones. En algunos casos, para adquirir un producto, será
          necesario el registro por parte del usuario, con ingreso de datos
          personales fidedignos y definición de una contraseña. El usuario puede
          elegir y cambiar la clave para su acceso de administración de la
          cuenta en cualquier momento, en caso de que se haya registrado y que
          sea necesario para la compra de alguno de nuestros productos. no asume
          la responsabilidad en caso de que entregue dicha clave a terceros.
          Todas las compras y transacciones que se lleven a cabo por medio de
          este sitio web, están sujetas a un proceso de confirmación y
          verificación, el cual podría incluir la verificación del stock y
          disponibilidad de producto, validación de la forma de pago, validación
          de la factura (en caso de existir) y el cumplimiento de las
          condiciones requeridas por el medio de pago seleccionado. En algunos
          casos puede que se requiera una verificación por medio de correo
          electrónico. Los precios de los productos ofrecidos en esta Tienda
          Online es válido solamente en las compras realizadas en este sitio
          web.En el caso de productos que sean mercancías irrevocables
          no-tangibles, no realizamos reembolsos después de que se envíe el
          producto, usted tiene la responsabilidad de entender antes de
          comprarlo. Le pedimos que lea cuidadosamente antes de comprarlo.
          Hacemos solamente excepciones con esta regla cuando la descripción no
          se ajusta al producto. Hay algunos productos que pudieran tener
          garantía y posibilidad de reembolso pero este será especificado al
          comprar el producto. En tales casos la garantía solo cubrirá fallas de
          fábrica y sólo se hará efectiva cuando el producto se haya usado
          correctamente. La garantía no cubre averías o daños ocasionados por
          uso indebido. Los términos de la garantía están asociados a fallas de
          fabricación y funcionamiento en condiciones normales de los productos
          y sólo se harán efectivos estos términos si el equipo ha sido usado
          correctamente. Esto incluye: De acuerdo a las especificaciones
          técnicas indicadas para cada producto. En condiciones ambientales
          acorde con las especificaciones indicadas por el fabricante. En uso
          específico para la función con que fue diseñado de fábrica. En
          condiciones de operación eléctricas acorde con las especificaciones y
          tolerancias indicadas. En el caso de productos que sean mercancías
          irrevocables no-tangibles, no realizamos reembolsos después de que se
          envíe el producto, usted tiene la responsabilidad de entender antes de
          comprarlo. Le pedimos que lea cuidadosamente antes de comprarlo.
          Hacemos solamente excepciones con esta regla cuando la descripción no
          se ajusta al producto. Hay algunos productos que pudieran tener
          garantía y posibilidad de reembolso pero este será especificado al
          comprar el producto. En tales casos la garantía solo cubrirá fallas de
          fábrica y sólo se hará efectiva cuando el producto se haya usado
          correctamente. La garantía no cubre averías o daños ocasionados por
          uso indebido. Los términos de la garantía están asociados a fallas de
          fabricación y funcionamiento en condiciones normales de los productos
          y sólo se harán efectivos estos términos si el equipo ha sido usado
          correctamente. Esto incluye:
        </Modal>
      )}
    </>
  );
};

export const DummyModalFull = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <button size="small" type="primary" onClick={() => setOpenModal(true)}>
        Abre el modal fullWidth
      </button>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          type="full"
          size="37"
          iconColor="GRAY_3"
        >
          <p style={{ textAlign: "center" }}>Some text</p>
          <p style={{ textAlign: "center" }}>¿Some text?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" type="primary">
              TEXTO
            </Button>
            <Button size="small" type="secondary">
              OTRO TEXTO
            </Button>
          </div>
          <p style={{ textAlign: "center" }}>Some text</p>
          <p style={{ textAlign: "center" }}>¿Some text?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" type="primary">
              TEXTO
            </Button>
            <Button size="small" type="secondary">
              OTRO TEXTO
            </Button>
          </div>
          <p style={{ textAlign: "center" }}>Some text</p>
          <p style={{ textAlign: "center" }}>¿Some text?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" type="primary">
              TEXTO
            </Button>
            <Button size="small" type="secondary">
              OTRO TEXTO
            </Button>
          </div>
          <p style={{ textAlign: "center" }}>Some text</p>
          <p style={{ textAlign: "center" }}>¿Some text?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" type="primary">
              TEXTO
            </Button>
            <Button size="small" type="secondary">
              OTRO TEXTO
            </Button>
          </div>
          <p style={{ textAlign: "center" }}>Some text</p>
          <p style={{ textAlign: "center" }}>¿Some text?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" type="primary">
              TEXTO
            </Button>
            <Button size="small" type="secondary">
              OTRO TEXTO
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};
