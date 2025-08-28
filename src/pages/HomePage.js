// src/pages/HomePage.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei';
import Button from '../components/Button';

// --- Componente para o Modelo 3D ---
function ContainerShip() {
  const gltf = useGLTF('/models/container_ship.glb');
  return <primitive object={gltf.scene} scale={0.5} />;
}

// --- Componente da Home Page ---
export default function HomePage() {
  const hdriPath = '/hdri/qwantani_moonrise_puresky_4k.exr';

  return (
    <div className="homepage-container">
      {/* Container principal para o conteúdo e a cena 3D */}
      <div className="homepage-intro">
        
        {/* Conteúdo de texto à esquerda */}
        <div className="homepage-content">
          <h1>Liga Acadêmica de Biologia Imaculada Conceição</h1>
          <p>
            Bem-vindo à Liga Acadêmica de Biologia Imaculada Conceição, um espaço
            dedicado à pesquisa e inovação em ecossistemas aquáticos. Nossos
            projetos buscam soluções sustentáveis para os desafios ambientais de
            nossa região.
          </p>
          <div className="homepage-cta">
            <Button text="Conheça Nossos Projetos" link="/projetos" />
            <Button text="Saiba Mais" link="/sobre" secondary />
          </div>
        </div>

        {/* Container para a cena 3D à direita */}
        <div className="three-js-canvas">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }} fog={false}>
            <Suspense fallback={<Html center>Carregando...</Html>}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} />
              <ContainerShip />
              <OrbitControls />
              <Environment files={hdriPath} background />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Novo Conteúdo - Seção 2 */}
      <div className="homepage-section two">
        <div className="section-content">
          <h2>Nossa Missão</h2>
          <p>
            Guiados pela paixão pela ciência e pelo compromisso com o meio ambiente,
            buscamos inspirar a próxima geração de biólogos e cientistas. Acreditamos
            que a educação e a pesquisa são as ferramentas mais poderosas para
            proteger e restaurar os nossos ecossistemas naturais.
          </p>
          <Button text="Leia Nosso Blog" link="/blog" />
        </div>
      </div>

      {/* Novo Conteúdo - Seção 3: Estatísticas */}
      <div className="homepage-section three">
        <div className="stats-container">
          <div className="stat-card">
            <h3>4</h3>
            <p>Projetos em Andamento</p>
          </div>
          <div className="stat-card">
            <h3>35+</h3>
            <p>Alunos Envolvidos</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Artigos Publicados</p>
          </div>
        </div>
      </div>
    </div>
  );
}