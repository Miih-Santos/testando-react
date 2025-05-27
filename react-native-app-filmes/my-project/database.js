const db_films = [ 
    {
        "nome":"Duna",
        "nota":4.1,
        "img":new URL('https://upload.wikimedia.org/wikipedia/pt/a/a3/Dune_2021.jpeg'),
        "sinopse":"Paul Atreides é um jovem brilhante, dono de um destino além de sua compreensão. Ele deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo."
    },
    {
        "nome":"Até o último homem",
        "nota":4.6,
        "img":new URL('https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg'),
        "sinopse":"Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens."
    },
    {
        "nome":"Sociedade dos poetas mortos",
        "nota":4.6,
        "img":new URL('https://upload.wikimedia.org/wikipedia/pt/0/04/Dead_Poets_Society.jpg'),
        "sinopse":"O novo professor de Inglês John Keating é introduzido a uma escola preparatória de meninos que é conhecida por suas antigas tradições e alto padrão. Ele usa métodos pouco ortodoxos para atingir seus alunos, que enfrentam enormes pressões de seus pais e da escola. Com a ajuda de Keating, os alunos Neil Perry, Todd Anderson e outros aprendem como não serem tão tímidos, seguir seus sonhos e aproveitar cada dia."
    },
    {
        "nome":"Homem-Aranha sem volta para casa",
        "nota":4.5,
        "img":new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tflMjpKrsMbzUVmm8QwCwvWuoaTb6Ah6SdfqUPIcyR6KvSiu8-rDt_q_DLAd'),
        "sinopse":"Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso."
    },
    {
        "nome":"MIB - Homens de preto",
        "nota":4.7,
        "img":new URL('https://br.web.img3.acsta.net/medias/nmedia/18/90/71/71/20109801.jpg'),
        "sinopse":"Os agentes K e J são policiais futuristas que trabalham em um projeto supersecreto do governo. Ele envolve a captura e deportação de seres espaciais não autorizados a ficarem na Terra."
    },
    {
        "nome":"Carros",
        "nota":4.4,
        "img":new URL('https://recreio.com.br/media/_versions/2024/02/carross_capa_widelg.jpg'),
        "sinopse":"Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida."
    },
    {
        "nome":"Harry Potter",
        "nota":4.5,
        "img":new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0cPcHHV1cFs96AsKW7N4ZpF7HsZbg2cBgQ&s'),
        "sinopse":"Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger."
    },
    {
        "nome":"+ Velozes + Furiosos",
        "nota":4.7,
        "img": new URL('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlUEhuq5bcZhgccPbJ0GIv1sUNGjPWPJJ2GsnOsZLNbyPm4RD56p9BiqS51E3kXuYHK'),
        "sinopse":"O ex-policial Brian O'Conner se muda de Los Angeles para Miami para recomeçar sua vida. Ele acaba se envolvendo em rachas na sua nova cidade com seu amigo Tej e Suki. Suas aventuras terminam quando ele é preso e faz um acordo com agentes do FBI. Brian tem a missão muito perigosa de prender um poderoso chefe do cartel das drogas."
    },
    {
        "nome":"Donnie Darko",
        "nota":4.5,
        "img":new URL('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRq5AiZMCsM_TDN--u_MwGB9C70UQxI70VXuL0XjA_0aSJif0zWleT9Hmwv8OmOrp9r8sp9an3Nz2CWKd7ne-mahmessxTWMA'),
        "sinopse":"Donnie é um jovem excêntrico que despreza a grande maioria de seus colegas de escola. Ele tem visões, em especial de Frank, um coelho gigante que só ele consegue ver e que o encoraja a fazer brincadeiras humilhantes com quem o cerca. Um dia, uma de suas visões o atrai para fora de casa e lhe diz que o mundo acabará dentro de um mês. Donnie inicialmente não acredita, mas, momentos depois, a turbina de um avião cai em sua casa e ele começa a se perguntar qual é o fundo de verdade dessa previsão."
    },
    {
        "nome":"Star Wars 2",
        "nota":4.2,
        "img":new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6loEA1Wr7ZpWpHJD3H_CVWU9r-iQns2YaqTSvUPVMC3WuS0gJ2qfb-zrucxKme3B'),
        "sinopse":"Dez anos após o primeiro encontro, Anakin Skywalker vive um romance proibido com Padmé, enquanto Obi-Wan investiga uma tentativa de assassinato do senador e descobre um exército secreto de clones criado para tentar destruir os Jedi."
    }
]

console.log(db_films)

module.exports = {db_films}