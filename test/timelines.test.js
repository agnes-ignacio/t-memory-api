const timelineModel = require("../src/models/timelineModel")
jest.useFakeTimers() 


describe("GET route test", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });
    jest.useFakeTimers() 
    it("Deve chamar o schema e retornar o nome correto da timeline", () => {
        expect(timeline.title).toBe("timeline teste");
    });
    jest.useFakeTimers() 
    it("Deve chamar o schema e retornar a descrição correta da timeline", () => {
        expect(timeline.description).toBe("uma timeline criada para testes");
    });
    jest.useFakeTimers() 
    it("Deve chamar o schema e retornar o valor arquivado como verdadeiro", () => {
        expect(timeline.archived).toBe(true);
    });
});

describe("CREATE route test", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });
    jest.useFakeTimers() 
    it("Deve salvar no banco de dados a nova memória", () => {
        timeline.save().then((dados) => {
            expect(dados.title).toBe("timeline teste");
        });
        
    });
})


describe("UPDATE route test", () => {
    jest.useFakeTimers() 
    it("Deve editar o título e salvar no banco de dados a nova timeline", () => {
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        });
        timeline.title = "nova timeline teste"
        timeline.save().then((dados) => {
            expect(dados.title).toBe("nova timeline teste");
        });
        
    });
})

describe("DELETE route test", () => { 
    it("Deve excluir a nova memória", () => {
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        });
        timeline.save().then((dados) => {
            timeline.delete().then((novosdados) =>{
                expect(dados.title).toBe(null);
            })
        });
        
    });
})