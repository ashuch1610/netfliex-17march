import OpenAI from 'openai';
import OpenAIKey  from "./Constants";

const openai = new OpenAI({
  apiKey: OpenAIKey,  dangerouslyAllowBrowser: true// This is the default and can be omitted
});
export default openai;