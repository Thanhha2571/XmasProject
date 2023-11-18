import Footer from "../Footer/Footer"
const Danten = () => {
    return (
        <div>
            <div className="flex flex-col gap-5 w-full bg-backGround">
                <div className="flex flex-col gap-8
                mobileSmall: px-4
                laptop:px-16
                
            ">
                    <div className="text-textTitle font-DancingScript mt-5 
                    mobileSmall:text-3xl
                    laptop:text-6xl
                    desktopLarge:text-8xl
                ">Datenschutz</div>
                    <div className="flex flex-col gap-5">
                        <p className="text-textTitle font-DancingScript italic
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            1. Datenschutz auf einen Blick
                        </p>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Allgemeine Hinweise
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Datenerfassung auf dieser Website
                        </p>
                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div className="underline">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</div>
                            <div>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</div>
                        </div>
                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div className="underline">Wie erfassen wir Ihre Daten?</div>
                            <div>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</div>
                            <div>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</div>
                        </div>

                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div className="underline">Wofür nutzen wir Ihre Daten?</div>
                            <div>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</div>
                        </div>

                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div className="underline">Welche Rechte haben Sie bezüglich Ihrer Daten?</div>
                            <div>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</div>
                            <div>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Analyse-Tools und Tools von Drittanbietern
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.</div>
                            <div>Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.</div>
                        </div>
                        <p className="text-textTitle font-DancingScript italic
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            2. Hosting
                        </p>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Externes Hosting
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</div>
                            <div>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</div>
                            <div>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</div>
                        </div>
                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div className="underline">Wie erfassen wir Ihre Daten?</div>
                            <div>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</div>
                            <div>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</div>
                        </div>

                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div className="underline">Wofür nutzen wir Ihre Daten?</div>
                            <div>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-textTitle font-DancingScript italic
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            3. Allgemeine Hinweise und Pflichtinformationen
                        </p>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Datenschutz
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</div>
                            <div>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</div>
                            <div>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Hinweis zur verantwortlichen Stelle
                        </p>
                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</div>
                        </div>
                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Nguyen und Pham GbR</div>
                            <div>Schlotfegergasse 2</div>
                            <div>90402 Nürnberg </div>
                            <div className="mt-5">Telefon: 0911 80195994</div>
                            <div className="mb-5">E-Mail: service@the-coco.de</div>
                            <div>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Widerruf Ihrer Einwilligung zur Datenverarbeitung
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</div>
                            <div>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Beschwerderecht bei der zuständigen Aufsichtsbehörde
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Recht auf Datenübertragbarkeit
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            SSL- bzw. TLS-Verschlüsselung
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</div>
                            <div>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</div>
                        </div>

                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Auskunft, Löschung und Berichtigung
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Recht auf Einschränkung der Verarbeitung
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</div>
                            <div className="ml-4 flex flex-col gap-4 mt-3 underline">
                                <div>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</div>
                                <div>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</div>
                                <div>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</div>
                                <div>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</div>
                            </div>
                            <div>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Widerspruch gegen Werbe-E-Mails
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-textTitle font-DancingScript italic
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            4. Datenerfassung auf dieser Website
                        </p>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Server-Log-Dateien
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</div>
                            <div className="ml-4 flex flex-col gap-4 mt-3 ">
                                <div>Browsertyp und Browserversion</div>
                                <div>verwendetes Betriebssystem</div>
                                <div>Referrer URL</div>
                                <div>Hostname des zugreifenden Rechners</div>
                                <div>Uhrzeit der Serveranfrage</div>
                                <div>IP-Adresse</div>
                            </div>
                            <div>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</div>
                            <div>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Kontaktformular
                        </p>
                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</div>
                            <div>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</div>
                            <div>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Anfrage per E-Mail, Telefon oder Telefax
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</div>
                            <div>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</div>
                            <div>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Verarbeiten von Daten (Kunden- und Vertragsdaten)
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.</div>
                            <div>Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-textTitle font-DancingScript italic
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            5. Analyse-Tools und Werbung
                        </p>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Google Analytics
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</div>
                            <div>Google Analytics verwendet so genannte „Cookies“. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</div>
                            <div>Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</div>
                            <div>IP Anonymisierung</div>
                            <div>Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</div>
                            <div>Browser Plugin</div>
                            <div>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: </div>
                            <div>Widerspruch gegen Datenerfassung</div>
                            <div>Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert:</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Kontaktformular
                        </p>
                        <div className="flex flex-col gap-3 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</div>
                            <div>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</div>
                            <div>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Anfrage per E-Mail, Telefon oder Telefax
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</div>
                            <div>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</div>
                            <div>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</div>
                        </div>
                        <p className="text-textTitle font-Changa
                        mobileSmall:text-2xl
                        laptop:text-4xl
                        desktopLarge:text-6xl
                    ">
                            Verarbeiten von Daten (Kunden- und Vertragsdaten)
                        </p>
                        <div className="flex flex-col gap-1 font-Changa text-textColor
                        mobileSmall:text-base
                        laptop:text-xl
                        desktopLarge:text-3xl
                    ">
                            <div>Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.</div>
                            <div>Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Danten