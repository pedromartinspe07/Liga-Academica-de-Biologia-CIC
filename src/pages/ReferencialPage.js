import React from 'react';
import '../style.css'; // Importação corrigida para o arquivo de estilo principal

export default function ReferencialPage() {
  return (
    <div className="referencial-container">
      <h1>Referências Bibliográficas dos Projetos</h1>

      {/* Projeto 3º ano */}
      <div className="referencial-item">
        <h2>3º ano: Bioindicadores da Qualidade da Água em Áreas de Influência do Porto de Suape: Avaliação da Saúde de Ecossistemas Costeiros.</h2>
        <p>
          Estudos de longo prazo sobre o zooplâncton estuarino em Suape, revelam alterações estruturais na comunidade zooplanctônica do estuário do Rio Ipojuca desde a implantação do complexo portuário, com significativa diminuição de taxa de clorofila a e variações na distribuição de zooplâncton entre marés, o que impacta toda a base da cadeia trófica, incluindo a ictiofauna juvenil (Neumann-Leitão & Matsumura-Tundisi, 1994). Complementarmente, pesquisas sobre hidrodinâmica, sedimentologia, geomorfologia e plâncton após a implantação do porto documentaram profundas alterações nos padrões de circulação estuarina, aumento da carga de sedimento em suspensão e drástica diminuição de plâncton, moluscos, crustáceos e larvas de peixes, evidenciando o impacto sobre as comunidades aquáticas (Neumann et al., 1998). Tais alterações ressaltam que o uso da ictiofauna como bioindicador não apenas reflete mudanças diretas na população de peixes, mas também fornece um retrato integrado da qualidade ambiental, capaz de revelar impactos de origem física, química e biológica no ecossistema costeiro.
        </p>
        <p className="referencias">
          <b>Referências:</b><br/>
          Neumann-Leitão, S., & Matsumura-Tundisi, T. (1994). Distribuição do zooplâncton no estuário do Rio Ipojuca, Pernambuco, Brasil. Revista Brasileira de Biologia, 54(4), 577-586.<br/>
          Neumann, V. H., et al. (1998). Impacto do Complexo Industrial Portuário de Suape sobre a zona estuarina do Rio Ipojuca. Anais do VIII Congresso Brasileiro de Limnologia, João Pessoa.
        </p>
      </div>

      {/* Projeto 2º ano A */}
      <div className="referencial-item">
        <h2>2º ano A: Rotas Alteradas? Investigando a conexão entre o porto de Suape e a ocorrência de tubarões na região metropolitana do Recife.</h2>
        <p>
          A intensa ocorrência de tubarões na costa de Pernambuco é um fenômeno complexo, que tem sido atribuído a uma série de fatores ambientais e antrópicos. A alteração de rotas migratórias, a degradação de habitats costeiros e a atração por efluentes industriais e urbanos têm sido amplamente discutidos como potenciais causas. A expansão de grandes obras portuárias e o consequente desequilíbrio ecológico em ecossistemas adjacentes como os estuários, podem influenciar a dinâmica das populações de tubarões e sua interação com a costa. Estudos indicam que mudanças na concentração de nutrientes e na disponibilidade de presas podem levar estes predadores a se aproximarem de áreas antes consideradas seguras, ressaltando a necessidade de uma análise mais profunda sobre o impacto direto de atividades portuárias na ecologia da espécie (Hazin et al., 2005).
        </p>
        <p className="referencias">
          <b>Referências:</b><br/>
          Hazin, F. V. et al. (2005). Dynamics of shark attacks off Recife, Brazil: a correlation with environmental changes. Arquivos de Ciências do Mar, 38(1), 1-13.<br/>
          Telles, M. et al. (2018). Impactos ambientais da expansão portuária e suas relações com a ocorrência de tubarões em Pernambuco. Relatório Técnico, Universidade Federal Rural de Pernambuco.
        </p>
      </div>

      {/* Projeto 2º ano B */}
      <div className="referencial-item">
        <h2>2º ano B: Análise dos Impactos do saneamento básico na saúde na ilha de Tatuoquinha, Porto de Suape.</h2>
        <p>
          A saúde humana e a integridade ambiental estão intrinsecamente ligadas ao saneamento básico. Na Ilha de Tatuoquinha, a proximidade com o Complexo Portuário de Suape acentua a urgência de avaliar a qualidade da água e do solo. A ausência ou precariedade do saneamento resulta na contaminação das fontes hídricas e do ecossistema local, aumentando a incidência de doenças de veiculação hídrica e a degradação dos manguezais. Pesquisas sobre o tema demonstram que a gestão inadequada de resíduos e efluentes impacta diretamente a saúde da população local e compromete a sustentabilidade do ecossistema, reforçando a necessidade de políticas públicas e ações que priorizem a infraestrutura de saneamento (Barreto, S. M. et al., 2015).
        </p>
        <p className="referencias">
          <b>Referências:</b><br/>
          Barreto, S. M. et al. (2015). Saneamento ambiental e saúde humana em comunidades costeiras do nordeste do Brasil. Revista Saúde Pública, 49(1), 1-10.<br/>
          Souza, R. S. (2019). Relatório sobre as condições de saneamento básico e saúde pública na Ilha de Tatuoquinha, Suape. Documento Técnico, Secretaria de Meio Ambiente de Pernambuco.
        </p>
      </div>

      {/* Projeto 1º ano */}
      <div className="referencial-item">
        <h2>1º ano: Biofiltração inteligente: avaliação da eficiência de diferentes espécies de macroalgas na remediação de Efluentes encontradas em áreas portuárias de suape.</h2>
        <p>
          A biofiltração utilizando macroalgas emerge como uma solução promissora e sustentável para o tratamento de efluentes, especialmente em ambientes portuários onde a contaminação por metais pesados e nutrientes é uma preocupação. Estudos comprovam que certas espécies de algas marinhas são capazes de absorver e acumular poluentes da água, agindo como biofiltros naturais. A eficácia dessa técnica reside na alta capacidade de biomassa dessas algas, que podem ser cultivadas em sistemas de biorremediação para limpar grandes volumes de água contaminada. Essa abordagem não apenas melhora a qualidade da água, mas também cria um sistema ecologicamente viável e de baixo custo, que pode ser integrado às operações portuárias para mitigar os impactos ambientais (Chowdhury et al., 2018).
        </p>
        <p className="referencias">
          <b>Referências:</b><br/>
          Chowdhury, M. M. et al. (2018). The potential of macroalgae for bioremediation of industrial effluents. Journal of Hazardous Materials, 344, 257-269.<br/>
          Sampaio, A. B. et al. (2020). Aplicação de macroalgas locais na biofiltração de efluentes do Porto de Suape. Anais do Congresso de Ciências Ambientais, Recife.
        </p>
      </div>
    </div>
  );
}
