import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyReply,
    FastifyRequest
} from "fastify";
import { CreateNutritionController } from "./Controllers/CreateNutritionController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {

        let responseText = "```json\n{\n  \"nome\": \"Guilherme\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 28,\n  \"altura\": 1.78,\n  \"peso\": 68,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"200ml de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego com granola\",\n        \"1 maçã\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis\",\n        \"Salada de folhas verdes com tomate e azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 batata doce média\",\n        \"1 scoop de whey protein\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de espinafre\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"1 scoop de caseína\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\"\n  ]\n}\n```"

        try {
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

            let jsonObject = JSON.parse(jsonString)

            return reply.send({ data: jsonObject })
        } catch (error) {
            console.log(error);
        }

       
    })

    fastify.post("/create", (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
}