import "./App.css";

function App() {
  return (
    <>
      <div className="form-number">Form Number 2</div>
      <div className="rule-reference">(See Rule 8-10)</div>

      <div className="header">
        <div className="form-title">
          This Form has been prepared in the light of Rules No. 8 and 10 of
          Muslim Family Ordinance, 1961
        </div>
        <div className="main-title">NIKAH NAMA / MARRIAGE CERTIFICATE</div>
      </div>

      <div className="location-info">
        <strong>1. Name of the Ward:</strong>
        <input className="handwritten" type="text" />
        <strong>Town/Union:</strong>
        <input className="handwritten" type="text" />
        <strong>Tehsil/Police Station:</strong>
        <input className="handwritten" type="text" />
        <strong>District</strong>

        <input className="handwritten" type="text" />
        <strong> where marriage took place. </strong>
      </div>

      <table>
        <tr>
          <td className="field-number">2.</td>
          <td className="field-description">
            Name of the bridegroom & his father, with their respective residence
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">3.</td>
          <td className="field-description">
            Date of birth/Age of the Bridegroom
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">4.</td>
          <td className="field-description">
            Name of the Bride & her father, with their respective residence
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">5.</td>
          <td className="field-description">
            Whether the Bride is a Maiden, Widow or Divorcee
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">5-A.</td>
          <td className="field-description">
            If the Bride is a Widow or Divorcee, and she has children, then
            mention the number and names
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">6.</td>
          <td className="field-description">Date of Birth/Age of the Bride</td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">7.</td>
          <td className="field-description">
            Name of the Attorney, if any, appointed by the Bride, his father's
            name and his residence
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">8.</td>
          <td className="field-description">
            Name of the witnesses if the appointment of Bride's Attorney, with
            their father names, their residences and the relationship with the
            Bride
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">9.</td>
          <td className="field-description">
            Name of the Attorney, if any, appointed by the Bridegroom, their
            father's names and their Residence
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">10.</td>
          <td className="field-description">
            Name of the witnesses to the appointment of the Bridegroom's
            Attorney with their father names and their residences:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">11.</td>
          <td className="field-description">
            Names of the witnesses to the Marriage, their father names and their
            residences.
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">12.</td>
          <td className="field-description">
            Date on which the Marriage was solemnized.
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">13.</td>
          <td className="field-description">
            Amount of Dower/Guarantee for marriage paid
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">14.</td>
          <td className="field-description">
            How much of the Dower paid and how much deferred.
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">15.</td>
          <td className="field-description">
            Whether any portion of the Dower Guarantee was paid at the time of
            Marriage, if so, how much:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">16.</td>
          <td className="field-description">
            Whether any property was given in lieu of the whole or any part of
            the Guarantee amount with specification of the same and its
            valuation agreed to between the parties:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">17.</td>
          <td className="field-description">Special conditions, if any</td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">18.</td>
          <td className="field-description">
            Whether the Husband has delegated the power of divorce to the wife,
            if so under what conditions:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">19.</td>
          <td className="field-description">
            Whether the husband's right of divorce in any way curtailed
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">20.</td>
          <td className="field-description">
            Whether any document was drawn up at the time of marriage relating
            to the Marriage Guarantee amount and maintenance, etc, if so
            contents their of:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">21.</td>
          <td className="field-description">
            Whether the bridegroom has any existing wife, and if so, whether he
            has secured the permission of Arbitration council under the Muslim
            Family ordinance, 1961 to contract another marriage:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">21-A</td>
          <td className="field-description">
            If the groom is widower or divorcee and he has children then mention
            the number and names:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">22.</td>
          <td className="field-description">
            Number and Date of the communication conveying to the bride groom
            The permission of the arbitration council to contract another
            marriage:
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">23.</td>
          <td className="field-description">
            Name, Father's name and address of the person by whom the marriage
            was solemnized
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">24.</td>
          <td className="field-description">
            Date of Registration of marriage
          </td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="field-number">25.</td>
          <td className="field-description">Registration fee paid</td>
          <td className="field-value handwritten">
            <input type="text" />
          </td>
        </tr>
      </table>

      <h1>Undertaking</h1>
      <p>
        26. I am a Muslim and believe that Prophet Muhammad (S.A.W) is the last,
        final, and unconditional Seal of the Prophets (Khatam-un-Nabiyeen). I do
        not accept any person who claims to be a prophet after Muhammad (S.A.W)
        in any interpretation or any possible context of the word 'prophet,' nor
        do I consider such a claimant to prophethood as a prophet, religious
        reformer, or even a Muslim. I consider Mirza Ghulam Ahmad Qadiani to be
        a false prophet and consider his followers belonging to either the
        Lahori or Qadiani groups to be non-Muslims.
      </p>

      <div className="signatures">
        <div className="signature-section">
          <div className="signature-box">
            <strong>Signature of the Bridegroom or his Attorney</strong>

            <p>____(SIGNATURE OF BRIDEGROOM)_____</p>

            <strong>Signature of the Bride</strong>

            <p>____(SIGNATURE OF BRIDE)_____</p>
          </div>

          <div className="signature-box">
            <strong>
              Signature of the witnesses to the appointment of the bridegroom's
              Vakil(Representative)
            </strong>

            <p>1. ______________</p>
            <p>2. ______________</p>
          </div>
        </div>

        <div className="signature-section">
          <div className="signature-box">
            <strong>Signature of the Vakil(Representative) of the Bride</strong>

            <p>____(SIGNATURE OF VAKIL OF BRIDE)_____</p>
          </div>
          <div className="signature-box">
            <strong>
              Signature of the witnesses to the appointment of the bride's
              Vakil(Representative)
            </strong>

            <p>1. __( SIGN OF WITNESS NO.1)__</p>
            <p>2. __( SIGN OF WITNESS NO.2)__</p>
          </div>
        </div>

        <div className="signature-section">
          <div className="signature-box">
            <strong>Signature of the witnesses to the Marriage</strong>

            <p>1. __( SIGN OF WITNESS NO.1)__</p>
            <p>2. __( SIGN OF WITNESS NO.2)__</p>
          </div>
          <div className="signature-box">
            <strong>Signature of the person who solemnized the Marriage</strong>

            <p>____(SIGNATURE OF QARI)_____</p>

            <strong>
              Signature and seal of the Nikah Registrar (Marrage Registrar)
            </strong>
            <p>____(SIGNATURE OF NIKAH REGISTRAR)_____</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
