import Axios from "axios";
import { NewsLinks } from "../constants/links";

export const News = Axios.create({
  baseURL: NewsLinks
});
