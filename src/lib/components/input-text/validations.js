export default class Val {
  static validarcampos = (name, value, ops) => {
    switch (name) {
      case "nombreejecutivo":
      case "nombrebroker":
      case "nombre":
      case "apepaterno":
      case "apematerno":
        return Val.soloTexto(value);

      case "documento":
        return Val.documento(value, ops);

      case "celular":
        return Val.celular(value);

      case "placa":
        return Val.placa(value);

      case "correo":
        return Val.correo(value);

      case "direccion":
      case "motor":
      case "serie":
      case "tipodocumento":
      case "cobertura":
      case "marca":
      case "modelo":
      case "distrito":
      case "razonsocial":
      case "resdepago":
        return Val.alfanumerico(value);

      case "anio":
        return Val.anio(value);

      case "sumaasegurada":
        return Val.monto(value);

      case "nrodir":
        return Val.soloNumero(value);

      default:
        return false;
    }
  };

  static vacio(value = "") {
    return value.toString().length > 0;
  }

  static soloTexto(value = "") {
    var exp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/i;
    return exp.test(value);
  }

  static soloNumero(value) {
    var exp = /^[0-9]+$/;
    return exp.test(value) && value > 0;
  }

  static documento(value, tipo) {
    return tipo === "1"
      ? Val.soloNumero(value) &&
          value.length === 11 &&
          (value.substring(0, 2) === "10" || value.substring(0, 2) === "20")
      : tipo === "2"
      ? Val.soloNumero(value) && value.length === 8
      : tipo === "3" || tipo === "4"
      ? value.length > 7 && value.length < 13
      : false;
  }

  static celular(value) {
    let regex = /[9][0-9]{8}/;
    return regex.test(value);
  }

  static placa(value) {
    // var expreg = new RegExp("^[A-Z]{1,2}\\s\\d{4}\\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$");
    value = value.replace("-", "");
    var regex = /^[a-zA-Z0-9_]*$/;
    if (regex.test(value) && value.length === 6) {
      return (
        Val.soloTexto(value.substring(0, 1)) &&
        Val.soloNumero(value.substring(3, 6))
      );
    } else {
      return false;
    }
  }

  static correo(value = null) {
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regExp.test(value);
  }

  static alfanumerico(value) {
    let regExp = /^[0-9A-Za-záÁéÉíÍóÓúÚÑñ&.-/\s]*$/i;
    return regExp.test(value);
  }

  static anio(value) {
    return (
      Val.soloNumero(value) &&
      1960 <= value &&
      value <= new Date().getFullYear()
    );
  }

  static monto(value) {
    value = value.replace("$ ", "");
    value = value.replace(",", "");
    return (Val.soloNumero(value) && value <= 50000) || !Val.vacio(value);
  }
}
