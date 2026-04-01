import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Moritz. Restaurant",
  description:
    "Informationen zum Datenschutz im Moritz. Restaurant gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#F3EEE7] py-16 text-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
          Rechtliches
        </p>

        <h1 className="mb-10 font-[var(--font-playfair)] text-4xl md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="max-w-4xl space-y-8 font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D]">
          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Verantwortlicher
            </h2>
            <p>
              Tobias Moritz
              <br />
              Margaretenstraße 18
              <br />
              18609 Binz
              <br />
              E-Mail: restaurant.moritz@icloud.com
              <br />
              Telefon: +49 (0)151 29722874
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte
              und Leistungen erforderlich ist. Die Verarbeitung personenbezogener
              Daten erfolgt auf Grundlage der Datenschutz-Grundverordnung
              (DSGVO), insbesondere auf Basis von Art. 6 Abs. 1 lit. b DSGVO,
              soweit die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen
              oder zur Vertragserfüllung erforderlich ist, sowie auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO, soweit ein berechtigtes Interesse
              an einer sicheren und funktionsfähigen Bereitstellung der Website,
              der Bearbeitung eingehender Anfragen sowie einer anonymisierten
              statistischen Auswertung der Nutzung unserer Website besteht.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Hosting
            </h2>
            <p>
              Unsere Website wird über Vercel bereitgestellt. Beim Aufruf der
              Website können technisch erforderliche Daten verarbeitet werden,
              insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Inhalte, Browserinformationen sowie technische
              Protokolldaten.
            </p>
            <p>
              Die Verarbeitung erfolgt zum Zweck der technischen Bereitstellung,
              Stabilität und Sicherheit der Website auf Grundlage von Art. 6 Abs.
              1 lit. f DSGVO.
            </p>
            <p>
              Soweit personenbezogene Daten im Rahmen des Hostings durch Vercel
              verarbeitet werden, erfolgt dies auf Basis der vertraglichen
              Vereinbarungen mit dem jeweiligen Dienstleister. Vercel stellt für
              bestimmte Vertragskonstellationen auch ein Data Processing
              Addendum (DPA) bereit.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Server-Logfiles
            </h2>
            <p>
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Logfiles erfasst.
              Dazu können insbesondere Browsertyp, Betriebssystem, IP-Adresse,
              Datum und Uhrzeit des Zugriffs sowie die aufgerufenen Seiten
              gehören.
            </p>
            <p>
              Die Verarbeitung erfolgt zur technischen Bereitstellung, Stabilität
              und Sicherheit der Website auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO.
            </p>
            <p>
              Die Daten werden nur so lange gespeichert, wie dies für den
              sicheren Betrieb der Website erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Vercel Web Analytics
            </h2>
            <p>
              Wir nutzen Vercel Web Analytics zur datenschutzfreundlichen,
              statistischen Auswertung der Nutzung unserer Website. Nach den
              Angaben von Vercel arbeitet dieser Dienst ohne Third-Party-Cookies
              und verarbeitet nur anonymisierte beziehungsweise aggregierte
              Nutzungsdaten.
            </p>
            <p>
              Dabei können insbesondere Informationen zu Seitenaufrufen,
              Referrern, Browsertyp, Betriebssystem, Gerätekategorie und
              ungefährem Standort verarbeitet werden. Vercel gibt an, dass
              Endnutzer anhand eines Hashes aus der eingehenden Anfrage erkannt
              werden und dass diese Zuordnung nicht dauerhaft gespeichert,
              sondern nach 24 Stunden verworfen wird.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt in der anonymisierten
              Analyse der Reichweite, der Verbesserung unseres Online-Angebots
              und der technisch-wirtschaftlichen Optimierung unserer Website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Kontaktaufnahme und Anfrageformular
            </h2>
            <p>
              Wenn Sie uns per E-Mail, telefonisch oder über das Anfrageformular
              kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten zur
              Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Dies betrifft insbesondere Name, E-Mail-Adresse, Telefonnummer
              (sofern freiwillig angegeben) sowie den Inhalt Ihrer Nachricht.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, soweit Ihre Anfrage auf den Abschluss oder die Durchführung
              eines Vertrags gerichtet ist, oder auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO wegen unseres berechtigten Interesses an der
              Bearbeitung eingehender Anfragen.
            </p>
            <p>
              Die Daten werden gelöscht, sobald die jeweilige Anfrage
              abschließend bearbeitet wurde und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              E-Mail-Versand über Resend
            </h2>
            <p>
              Für die technische Übermittlung von Formularanfragen nutzen wir den
              Dienst Resend. Wenn Sie unser Anfrageformular absenden, werden die
              von Ihnen eingegebenen Daten zum Zweck der Zustellung und
              Bearbeitung der Nachricht an Resend übermittelt.
            </p>
            <p>
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO beziehungsweise Art. 6
              Abs. 1 lit. f DSGVO. Resend bietet zudem ein Data Processing
              Addendum (DPA) für die Verarbeitung personenbezogener Daten an.
            </p>
            <p>
              Soweit dabei eine Verarbeitung personenbezogener Daten durch Resend
              erfolgt, geschieht dies im Rahmen der technischen
              Dienstleistungserbringung.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Datenübermittlung in Drittländer
            </h2>
            <p>
              Es kann nicht ausgeschlossen werden, dass im Rahmen der Nutzung
              unserer technischen Dienstleister, insbesondere Vercel und Resend,
              personenbezogene Daten in Drittländer, insbesondere in die USA,
              übertragen werden.
            </p>
            <p>
              Soweit eine solche Übermittlung erfolgt, geschieht sie auf
              Grundlage geeigneter Garantien gemäß Art. 44 ff. DSGVO,
              insbesondere durch den Abschluss von Standardvertragsklauseln oder
              anderer datenschutzrechtlich zulässiger Mechanismen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Online-Reservierung über externes Buchungssystem
            </h2>
            <p>
              Für Online-Reservierungen verlinken wir auf ein externes
              Buchungssystem von Lightspeed. Wenn Sie auf den Reservierungsbutton
              klicken, verlassen Sie unsere Website und werden auf eine externe
              Seite weitergeleitet.
            </p>
            <p>
              Auf dieser externen Seite werden personenbezogene Daten nicht mehr
              ausschließlich durch uns, sondern auch durch den jeweiligen
              Anbieter des Buchungssystems verarbeitet. Für die dortige
              Datenverarbeitung ist der jeweilige Betreiber der externen Seite
              verantwortlich.
            </p>
            <p>
              Bitte beachten Sie daher die Datenschutzhinweise des jeweiligen
              Anbieters, bevor Sie dort eine Reservierung vornehmen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Externe Links und Instagram
            </h2>
            <p>
              Auf unserer Website können Links zu externen Diensten eingebunden
              sein, insbesondere zu Instagram sowie zum externen
              Buchungssystem. Beim Anklicken eines solchen Links verlassen Sie
              unsere Website.
            </p>
            <p>
              Für die Verarbeitung personenbezogener Daten auf den externen
              Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Cookies und ähnliche Technologien
            </h2>
            <p>
              Auf dieser Website werden nach unserem derzeitigen Stand keine
              klassischen Third-Party-Tracking-Cookies zu Werbe- oder
              Marketingzwecken eingesetzt.
            </p>
            <p>
              Für Vercel Web Analytics gibt Vercel an, keine Third-Party-Cookies
              einzusetzen und nur anonymisierte beziehungsweise aggregierte Daten
              zur statistischen Auswertung zu verarbeiten.
            </p>
            <p>
              Technisch notwendige Speicherungen oder vergleichbare technische
              Mechanismen können im Einzelfall dennoch erforderlich sein, um die
              Website sicher und funktionsfähig bereitzustellen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Empfänger der Daten
            </h2>
            <p>
              Personenbezogene Daten können an technische Dienstleister
              weitergegeben werden, soweit dies zur Bereitstellung der Website
              und Bearbeitung von Anfragen erforderlich ist. Dazu gehören
              insbesondere Hosting-Dienstleister, der für den Formularversand
              eingesetzte E-Mail-Dienstleister sowie der Anbieter der
              eingesetzten Web-Analytics-Lösung.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Speicherdauer
            </h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie dies für die
              jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
            <p>
              Daten aus Kontaktanfragen werden in der Regel nach abschließender
              Bearbeitung gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
            <p>
              Entfällt der jeweilige Zweck oder läuft eine gesetzliche
              Aufbewahrungsfrist ab, werden die Daten entsprechend den
              gesetzlichen Vorschriften gelöscht oder in der Verarbeitung
              eingeschränkt.
            </p>
            <p>
              Für Vercel Web Analytics gibt Vercel an, dass die zur
              Besucherzuordnung verwendete Hash-basierte Erkennung nach 24
              Stunden verworfen wird.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen über
              das Kontaktformular, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers mit „https://“ beginnt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Ihre Rechte
            </h2>
            <p>
              Sie haben nach Maßgabe der gesetzlichen Vorschriften das Recht auf
              Auskunft über die zu Ihrer Person gespeicherten Daten, auf
              Berichtigung unrichtiger Daten, auf Löschung, auf Einschränkung der
              Verarbeitung, auf Datenübertragbarkeit sowie auf Widerspruch gegen
              die Verarbeitung Ihrer personenbezogenen Daten. Die maßgeblichen
              Betroffenenrechte ergeben sich insbesondere aus Art. 15 bis 21
              DSGVO.
            </p>
            <p>
              Sofern eine Verarbeitung auf einer Einwilligung beruht, haben Sie
              zudem das Recht, diese Einwilligung jederzeit mit Wirkung für die
              Zukunft zu widerrufen.
            </p>
            <p>
              Außerdem haben Sie das Recht, sich bei einer
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Widerspruch gegen Werbe-E-Mails
            </h2>
            <p>
              Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung wird hiermit widersprochen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Stand
            </h2>
            <p>Stand: März 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}