import logoImg from '@/imports/_DUDA__Capas_para_Notion__Post_para_Instagram__45__.png'
import dudaPhoto from '@/imports/3T5A6485.jpg'
import feedbackImg from '@/imports/Design_sem_nome.png'
import feedbackMobileImg from '@/imports/Sem_nome__760_x_380_px_.png'

const DARK = '#4d240c'
const LIGHT = '#fffdf9'

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: LIGHT, color: DARK }}>

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <header style={{ backgroundColor: DARK }} className="w-full py-5 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img src={logoImg} alt="Atria" style={{ height: 72, width: 'auto', display: 'block' }} />
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: LIGHT }} className="px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center py-20 md:py-32 flex flex-col items-center">
          <p style={{ color: `${DARK}88`, letterSpacing: '0.18em', fontSize: '0.72rem' }}
            className="uppercase font-medium mb-7">
            Consultoria individual
          </p>
          <h1 style={{ color: DARK, lineHeight: 1.22 }}
            className="text-[1.75rem] sm:text-4xl md:text-[2.85rem] font-semibold tracking-tight">
            A consultoria individual para você assumir o controle dos seus anúncios e atrair
            clientes qualificados sem depender de agências.
          </h1>

          <div style={{ width: 40, height: 1.5, backgroundColor: `${DARK}40` }} className="my-10" />

          <a
            href="#formulario"
            style={{ backgroundColor: DARK, color: LIGHT, borderRadius: 4, transition: 'opacity 0.2s' }}
            className="inline-block text-base font-medium px-10 py-4 w-full sm:w-auto hover:opacity-80 text-center"
          >
            Quero aplicar para a consultoria
          </a>
        </div>
      </section>

      {/* ── PROBLEMA ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: DARK, color: LIGHT }} className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto py-20 md:py-28">

          <h2 className="text-2xl md:text-[2rem] font-semibold tracking-tight text-center max-w-2xl mx-auto mb-14"
            style={{ lineHeight: 1.28 }}>
            Muitas empresárias ficam estagnadas porque:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-14">
            {[
              { icon: '↻', text: 'Estão exaustas de produzir conteúdo todos os dias e depender da boa vontade do algoritmo para vender.' },
              { icon: '⚠', text: 'Sabem que precisam investir em tráfego, mas têm medo de apertar o botão errado e rasgar dinheiro.' },
              { icon: '✂', text: 'Já tentaram impulsionar posts, mas só atraíram curiosos pedindo desconto.' },
              { icon: '✕', text: 'Não têm caixa para pagar a mensalidade de um gestor de tráfego agora, mas precisam crescer.' },
            ].map(({ icon, text }) => (
              <div key={text}
                style={{ borderColor: `${LIGHT}1a`, backgroundColor: `${LIGHT}06`, borderRadius: 8 }}
                className="border p-6 md:p-7">
                <span style={{ color: `${LIGHT}55`, fontSize: '1.1rem' }} className="block mb-3 leading-none">{icon}</span>
                <p style={{ color: `${LIGHT}cc` }} className="text-base md:text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTopColor: `${LIGHT}20` }} className="max-w-2xl mx-auto text-center border-t pt-10">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              Se você quer ter autonomia para atrair um público qualificado com segurança,
              a <span className="whitespace-nowrap">ATRIA</span> é o seu atalho.
            </p>
          </div>

        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────────────── */}
      <section style={{ backgroundColor: LIGHT }} className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto py-20 md:py-24">
          <h2 className="text-2xl md:text-[1.85rem] font-semibold tracking-tight text-center mb-14"
            style={{ color: DARK }}>
            Como a consultoria funciona:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                num: '01',
                title: 'A parte técnica chata (Eu faço por você)',
                body: 'Antes do nosso primeiro encontro, eu configuro toda a sua conta de anúncios, vinculo seu Instagram e arrumo a casa. Você não precisa apertar nenhum botão difícil.',
              },
              {
                num: '02',
                title: 'Encontro 1: Estratégia',
                body: 'Nós definimos qual produto vamos vender e para quem. Depois da nossa call, eu te direciono exatamente no que você precisa gravar para os seus anúncios.',
              },
              {
                num: '03',
                title: 'Encontro 2: Mão na massa',
                body: 'Com os seus vídeos prontos, nós abrimos o Gerenciador de Anúncios juntas. Eu te guio clique a clique para subirmos a sua campanha com total segurança.',
              },
              {
                num: '04',
                title: 'Encontro 3: Análise e Próximos Passos',
                body: 'Com a campanha rodando, lemos os números juntas. Te ensino a ver o que deu lucro, pausar o que ficou caro e te entrego o seu plano de ação para os próximos meses.',
              },
            ].map(({ num, title, body }) => (
              <div key={num}
                style={{
                  borderColor: `${DARK}12`,
                  borderRadius: 10,
                  boxShadow: `0 8px 28px -12px ${DARK}22`,
                  backgroundColor: '#fff',
                  transition: 'box-shadow 0.25s',
                }}
                className="border p-7 md:p-8 hover:shadow-lg">
                <span style={{ color: `${DARK}44`, letterSpacing: '0.14em', fontSize: '0.7rem' }}
                  className="block font-semibold mb-3">{num}</span>
                <h3 style={{ color: DARK }} className="text-base md:text-lg font-semibold mb-3">{title}</h3>
                <p style={{ color: `${DARK}bb` }} className="text-sm md:text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEEDBACKS ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: DARK }} className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto py-20 md:py-24">
          <p style={{ color: `${LIGHT}66`, letterSpacing: '0.2em', fontSize: '0.7rem' }}
            className="uppercase font-semibold text-center mb-5">
            Resultados
          </p>
          <h2 style={{ color: LIGHT, lineHeight: 1.25 }}
            className="text-2xl md:text-[1.85rem] font-semibold tracking-tight text-center mb-12">
            O que dizem as empresárias que já passaram pela ATRIA:
          </h2>
          {/* mobile version */}
          <div className="block md:hidden" style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img
              src={feedbackMobileImg}
              alt="Feedbacks de clientes da Atria"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          {/* desktop version */}
          <div className="hidden md:block" style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img
              src={feedbackImg}
              alt="Feedbacks de clientes da Atria"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── RESUMO E PREÇO ───────────────────────────────────────── */}
      <section style={{ backgroundColor: LIGHT }} className="px-6 md:px-12">
        <div className="max-w-2xl mx-auto py-20 md:py-24">
          <h2 style={{ color: DARK }} className="text-2xl md:text-[1.85rem] font-semibold tracking-tight text-center mb-10">
            O que está incluso na consultoria:
          </h2>

          <div style={{ backgroundColor: '#fff', borderColor: `${DARK}10`, borderRadius: 14, boxShadow: `0 24px 60px -20px ${DARK}30` }}
            className="border p-8 md:p-12">
            <ul className="space-y-4 mb-10">
              {[
                'Configuração técnica da sua conta de anúncios',
                '3 encontros individuais comigo (no Meet)',
                'Direcionamento e roteiros para os seus anúncios',
                'Plano de ação final em PDF (Dossiê ATRIA)',
                'Bônus: Suporte direto no meu WhatsApp durante todos os 40 dias da nossa consultoria, para você não travar na hora de executar.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base md:text-lg leading-relaxed">
                  <span style={{ color: `${DARK}70`, flexShrink: 0 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ borderTopColor: `${DARK}15` }} className="text-center border-t pt-8">
              <p style={{ color: `${DARK}66`, letterSpacing: '0.16em', fontSize: '0.68rem' }}
                className="uppercase font-semibold mb-2">
                Investimento
              </p>
              <p style={{ color: DARK }} className="text-2xl md:text-3xl font-semibold mb-2">R$ 2.000,00 à vista</p>
              <p style={{ color: `${DARK}70` }} className="text-sm md:text-base font-medium mb-8">
                ou parcelado no cartão de crédito
              </p>

              <a
                id="formulario"
                href="https://form.respondi.app/sxCoD98C"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: DARK, color: LIGHT, borderRadius: 4, transition: 'opacity 0.2s' }}
                className="inline-block text-base md:text-lg font-medium px-8 py-4 w-full sm:w-auto hover:opacity-80"
              >
                Preencher formulário de aplicação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUEM VAI TE GUIAR ────────────────────────────────────── */}
      <section style={{ backgroundColor: DARK }} className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 md:gap-16 items-center">

            <div style={{ borderRadius: 12, overflow: 'hidden', flexShrink: 0, aspectRatio: '3/4' }}
              className="mx-auto md:mx-0 w-64 md:w-full">
              <img
                src={dudaPhoto}
                alt="Duda, fundadora da Atria"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            <div>
              <p style={{ color: `${LIGHT}66`, letterSpacing: '0.18em', fontSize: '0.7rem' }}
                className="uppercase font-semibold mb-5">
                Quem vai te guiar
              </p>
              <h2 style={{ color: LIGHT, lineHeight: 1.2 }}
                className="text-2xl md:text-[2rem] font-semibold tracking-tight mb-7">
                Prazer, Duda.
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: `${LIGHT}bb` }}>
                <p>Sou empresária e estrategista de anúncios no campo de batalha desde 2022.</p>
                <p>Ao longo da minha jornada, já aprovei mais de 10.000 criativos e gerenciei mais de 7 dígitos em investimentos para os meus clientes.</p>
                <p>Criei a ATRIA porque cansei de ver empreendedoras incríveis deixando dinheiro na mesa por medo de anúncios ou por não entenderem o "idioma" difícil dos gestores de tráfego.</p>
                <p>Meu objetivo aqui não é te dar aulas teóricas. É sentar com você, aplicar a inteligência de quem vive o mercado todos os dias e estruturar a sua atração de clientes de forma simples, direta e lucrativa.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: DARK }} className="px-6">
        <div className="max-w-6xl mx-auto py-10 flex flex-col items-center gap-2 text-center">
          <img src={logoImg} alt="Atria" style={{ height: 52, width: 'auto' }} className="mb-3" />
          <p style={{ color: `${LIGHT}55`, fontSize: '0.78rem' }}>© Atria — Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  )
}
