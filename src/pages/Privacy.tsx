import PageHero from '../components/PageHero'

export default function Privacy() {
  return (
    <div>
      <PageHero
        title="Политика конфиденциальности"
        breadcrumbs={[{ label: 'Главная', href: '/' }, { label: 'Политика конфиденциальности' }]}
      />

      <section className="bg-[#F7F3EE] py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl text-[#2C241B] mb-4">1. Общие положения</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-6">
              Настоящая Политика конфиденциальности персональных данных (далее — Политика конфиденциальности) 
              действует в отношении всей информации, которую ИП Семенов Евгений Владимирович (ИНН: 502103181902), 
              расположенный на доменном имени данного сайта, может получить о Пользователе во время использования 
              сайта, программ и продуктов сайта.
            </p>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">2. Основные понятия</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">2.1.</strong> Автоматизированная обработка персональных данных — 
              обработка персональных данных с помощью средств вычислительной техники.
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">2.2.</strong> Блокирование персональных данных — временное 
              прекращение обработки персональных данных (за исключением случаев, если обработка необходима 
              для уточнения персональных данных).
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">2.3.</strong> Веб-сайт — совокупность графических и информационных 
              материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет.
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">2.4.</strong> Информационная система персональных данных — 
              совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку 
              информационных технологий и технических средств.
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">2.5.</strong> Обезличивание персональных данных — действия, 
              в результате которых невозможно определить без использования дополнительной информации 
              принадлежность персональных данных конкретному Пользователю.
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-6">
              <strong className="text-[#2C241B]">2.6.</strong> Обработка персональных данных — любое действие 
              (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации 
              или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, 
              накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу 
              (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение 
              персональных данных.
            </p>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">3. Предмет политики конфиденциальности</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">3.1.</strong> Настоящая Политика конфиденциальности устанавливает 
              обязательства Администрации сайта по неразглашению и обеспечению режима защиты конфиденциальности 
              персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при 
              регистрации на сайте или при оформлении заявки.
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-6">
              <strong className="text-[#2C241B]">3.2.</strong> Персональные данные, разрешённые к обработке в 
              рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения 
              форм на сайте и включают в себя следующую информацию:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">фамилию, имя, отчество Пользователя;</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">контактный телефон Пользователя;</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">адрес электронной почты (при наличии);</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">место жительство Пользователя и прочие данные.</span>
              </li>
            </ul>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">4. Цели сбора персональной информации пользователя</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">4.1.</strong> Персональные данные Пользователя Администрация 
              сайта может использовать в целях:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Идентификации Пользователя, оформившего заявку на сайте.</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Установления с Пользователем обратной связи, включая направление уведомлений, запросов.</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Определения местонахождения Пользователя для обеспечения безопасности, предотвращения мошенничества.</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Предоставления Пользователю эффективной клиентской и технической поддержки.</span>
              </li>
            </ul>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">5. Способы и сроки обработки персональной информации</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">5.1.</strong> Обработка персональных данных Пользователя 
              осуществляется без ограничения срока любым законным способом, в том числе в информационных 
              системах персональных данных с использованием средств автоматизации или без использования 
              таких средств.
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-6">
              <strong className="text-[#2C241B]">5.2.</strong> Пользователь соглашается с тем, что 
              Администрация сайта вправе передавать персональные данные третьим лицам, в частности, 
              курьерским службам, организациями почтовой связи, операторам электросвязи, исключительно 
              в целях выполнения заявки Пользователя.
            </p>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">6. Обязательства сторон</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">6.1.</strong> Пользователь обязан:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Предоставить информацию о персональных данных, необходимую для пользования сайтом.</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.</span>
              </li>
            </ul>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">6.2.</strong> Администрация сайта обязана:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя.</span>
              </li>
              <li className="flex items-start gap-3 text-[#6B5F4F]">
                <span className="text-[#C9A87C] mt-1 shrink-0">•</span>
                <span className="text-sm">Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя.</span>
              </li>
            </ul>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">7. Ответственность сторон</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-6">
              <strong className="text-[#2C241B]">7.1.</strong> Администрация сайта, не исполнившая свои 
              обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с 
              неправомерным использованием персональных данных, в соответствии с законодательством 
              Российской Федерации.
            </p>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">8. Разрешение споров</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">8.1.</strong> До обращения в суд с иском по спорам, 
              возникающим из отношений между Пользователем сайта и Администрацией сайта, обязательным 
              является предъявление претензии (письменного предложения о добровольном урегулировании спора).
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-6">
              <strong className="text-[#2C241B]">8.2.</strong> Получатель претензии в течение 30 календарных 
              дней со дня получения претензии письменно уведомляет заявителя претензии о результатах 
              рассмотрения претензии.
            </p>

            <h2 className="font-display text-2xl text-[#2C241B] mb-4">9. Дополнительные условия</h2>
            <p className="text-[#6B5F4F] leading-relaxed mb-4">
              <strong className="text-[#2C241B]">9.1.</strong> Администрация сайта вправе вносить изменения 
              в настоящую Политику конфиденциальности без согласия Пользователя.
            </p>
            <p className="text-[#6B5F4F] leading-relaxed mb-6">
              <strong className="text-[#2C241B]">9.2.</strong> Новая Политика конфиденциальности вступает 
              в силу с момента её размещения на сайте, если иное не предусмотрено новой редакцией 
              Политики конфиденциальности.
            </p>

            <div className="mt-12 pt-8 border-t border-[#D9D3CA]">
              <p className="text-[#9A8F80] text-sm">
                Обновлено: январь 2025 г.
              </p>
              <p className="text-[#9A8F80] text-sm mt-1">
                ИП Семенов Евгений Владимирович, ИНН: 502103181902
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
