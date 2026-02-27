import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useProductos } from "../hooks/useProductos";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductoItem } from "../components/ProductoItem";
import type { Producto } from "../types/producto";

export default function ProductosScreen() {
  const { productos, cargando, error, obtenerTodos } = useProductos();

  useEffect(() => {
    obtenerTodos()
  }, []);

  return (
    <SafeAreaView style={estilos.contenedor}>
      <Text style={estilos.titulo}>Productos</Text>

      {cargando && <Text style={estilos.mensaje}>Cargando...</Text>}
      {error && <Text style={estilos.error}>{error}</Text>}

      <FlatList<Producto>
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductoItem producto={item} />
        )}
        refreshing={cargando}
        onRefresh={obtenerTodos}
        ListEmptyComponent={
          <Text style={estilos.textoVacio}>No hay productos</Text>
        }
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  mensaje: {
    color: "#555",
    marginBottom: 8,
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
  contenedorVacio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textoVacio: {
    color: "#777",
    fontSize: 16,
  },
});