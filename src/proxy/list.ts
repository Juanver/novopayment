import { List } from "../domain/list";
import { ListMapper } from "../mapper/ListMapper";

export const getList = async (): Promise<List[]> => {
  const response = await fetch("http://localhost:3000/lista");
  const result = await response.json();

  if (response.ok) return ListMapper(result);
  throw new Error("Error en el servicio");
};
