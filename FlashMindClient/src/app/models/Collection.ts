import {FlashCard} from "./FlashCard";

export interface Collection {
  id: number;
  title: string;
  flashCards: FlashCard[];
}
