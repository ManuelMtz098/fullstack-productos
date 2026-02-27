import { StyleSheet, Text, View } from "react-native";
import { Producto } from "../types/producto";

interface Props {
  producto: Producto;
}

export const ProductoItem = ({ producto }: Props) => {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.nombre}>{producto.nombre}</Text>
      <Text style={estilos.precio}>
        ${producto.precio.toFixed(2)}
      </Text>
    </View>
  )
};

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  precio: {
    fontSize: 14,
    color: "#2e7d32",
    fontWeight: "bold",
  },
});