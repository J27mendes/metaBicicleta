let posicao = 29

function testeClick(){    
    //quando clicar no botao ele selecionar a div 30 e depois chegar até a              
    //let divSelecionada = cada.document.querySelector('.cada' )
    let lista = document.querySelectorAll('.cada')
    let listaArray = [...lista]
    let local = document.querySelector('.local')
    let recomecar =document.querySelector('#recomecar')

    parseInt(listaArray)
    if(listaArray[posicao].classList = 'cada'){
        listaArray[posicao].classList.remove('negativo')
        listaArray[posicao].classList.add('selecionado')     
        
    }
    

    if(posicao <= 0){
        document.querySelector('.tudo').style.display = 'none'
        document.querySelector('#botoes').style.display = 'none'
        
        local.style.width = '400px'
        local.style.height = '400px'  
        local.innerHTML = 'Parabéns você ganhou a bicicleta!!!'  
        local.style.marginLeft = '30%'
        recomecar.style.marginLeft = '30%'
        recomecar.style.height = '50px'
        recomecar.style.background = '#dbd93f'  
    } 
    posicao--  
    console.log(listaArray[posicao])
}


function testeNegativo(){
    let lista = document.querySelectorAll('.cada')
    let listaArray = [...lista]
    let local = document.querySelector('.local')
    let recomecar = document.querySelector('#recomecar')


    parseInt(listaArray)
    
    //listaArray[posicao].classList.add('selecionado')
        //posicao++
        if(listaArray[posicao].classList = 'cada'){
            listaArray[posicao].classList.remove('selecionado')
            //listaArray[posicao].classList.remove('cada')
            listaArray[posicao].classList.add('negativo')
        } 

        if(posicao >= 58){
            document.querySelector('.tudo').style.display = 'none'
            document.querySelector('#botoes').style.display = 'none'
            local.style.width = '400px'
            local.style.height = '400px'
            local.innerHTML = 'Infelizmente você está longe de ganhar uma bicicleta'
            local.style.marginLeft = '30%'
            recomecar.style.marginLeft = '30%'
            recomecar.style.height = '50px'
            recomecar.style.background = '#dbd93f'  
            
        }
        posicao++
        console.log(listaArray[posicao])
    }


    function recomecar(){ 
        document.querySelectorAll('.cada').forEach(item => {
            if(item.classList = 'selecionado'){
                item.classList.remove('selecionado')
                item.classList.add('cada')
            } 
        }) 

        document.querySelectorAll('.negativo').forEach(item2 => {
            if(item2.classList = 'negativo'){
                item2.classList.remove('negativo')
                item2.classList.add('cada')
            }
        })
      
    
       //let listaArray = [...lista]
       let local = document.querySelector('.local')
       let recomecar = document.querySelector('#recomecar')
       posicao = 29

       document.querySelector('.tudo').style.display = 'grid'
       document.querySelector('#botoes').style.display = 'block'
       document.querySelector('.local').style.display = 'flex'
       local.style.width = '120px'
       local.style.height = '48px'
       local.innerHTML = 'Bicicleta'
       local.style.marginLeft = '5%'
       recomecar.style.marginLeft = '5%'
       recomecar.background = '#a7a9cf'

       //console.log(posicao)
    }
    

   
    




    
    




