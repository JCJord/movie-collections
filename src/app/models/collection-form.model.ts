import { Show } from "./movie.model";

export interface Collection {
  id?: string;
  title: string;
  description: string;
  shows: Show[];
}