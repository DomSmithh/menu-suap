import HelloWorld from './HelloWorld';
import Button from './Button';
import SayName from './SayName';
import Noticia from './Noticia';

function App(){
  const lista_noticias = [
    {
      hour: "27/05/2022 13:58",
      description: "Manutenção do Sistema SUAP acontece nesta sexta-feira(27)"
    },
    {
      hour: "25/05/2022 07:50",
      description: "Estão abertas as escrições para projetos de pesquisa"
    },
    {
      hour: "25/05/2022 07:48",
      description: "Estão abertas as escrições para projetos de ensino"
    },
  ];

    return(
      <div>
        <Title />
        
        

        {lista_noticias.map((noticia) => {
          return <Noticia  horario={noticia.hour} desc={noticia.description} />
        } ) }

      </div>
        
    );
}

export default App
