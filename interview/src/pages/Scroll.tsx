import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-width: 0;
  transition-duration: 300ms;
`;
const ColorLayer = styled.div`
  animation: vui-fadeIn 0.3s ease;
  background-color: rgba(0, 42, 62, 0.6);
  inset: 0px;
  position: fixed;
  z-index: 1400;
`;
const BackLayer = styled.div`
  display: flex;
  inset: 0px;
  position: fixed;
  z-index: 1400;
  /* background-color: rgba(0, 42, 62, 0.6); */
`;

const Block1 = styled.div`
  width: 1px;
  height: 0px;
  padding: 0px;
  overflow: hidden;
  position: fixed;
  top: 1px;
  left: 1px;
`;

const Wrapper = styled.div`
  border-radius: 4px;
  padding-right: 48px;
  padding-left: 48px;
  padding-top: 32px;
  padding-bottom: 32px;
  top: 50%;
  left: 50%;
  width: 700px;
  height: auto;
  max-height: 600px;
  transform: translate(-50%, -50%);
  background-color: white;
  position: absolute;
  display: flex;
  min-width: 0;
  flex-direction: column;
`;
const Content = styled.div`
  overflow-y: auto;
`;

const BtnArea = styled.div`
  display: flex;
  min-width: 0;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
  justify-content: center;
  margin-top: 16px;
`;

const Test = (props: any) => {
  return (
    <Container>
      <ColorLayer />
      <Block1 />
      <div>
        <BackLayer tabIndex={-1}>
          <Wrapper tabIndex={-1}>
            <Content>
              <div>
                <p>
                  These terms and conditions constitutes the Agreement
                  (“Agreement”) between (i) DNV GL AS (hereinafter “
                  <strong>DNV GL</strong>”) and (ii) Customer, and shall govern
                  DNV GL’s provision of a license to use (the “License”) the
                  software requested by Customer (the “<strong>Product</strong>
                  ”). This Agreement shall supersede and invalidate all prior
                  representations, including any pre-existing agreements between
                  the parties relating to the Product,Customer’s terms and
                  conditions included in any of Customer’s purchase orders,
                  call-off orders or similar. No other amendment and/or
                  variation to the Agreement shall be valid unless duly signed
                  by both parties.
                </p>
                <p>
                  By clicking <strong>“I accept”</strong> you acknowledge that
                  you have read and agree to be bound by this Agreement. YOU
                  FURTHER CONFIRM THAT YOU ARE AUTHORISED TO SIGN AND ENTER INTO
                  BINDING AGREEMENTS FOR THE CORPORATION, PARTNERSHIP, LIMITED
                  LIABILITY COMPANY OR OTHER ENTITY YOU ARE REPRESENTING WHO
                  AGREES TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS
                  AGREEMENT (THE “<strong>CUSTOMER</strong>”). IF YOU ARE NOT
                  AUTHORIZED TO SIGN FOR AND BIND THE ENTITY, THEN DO NOT AGREE
                  TO THE TERMS AND CONDITIONS AND DO NOT ACCESS OR USE THE
                  SOFTWARE. BY CLICKING <strong>“I ACCEPT”</strong> BELOW, THE
                  ENTITY YOU REPRESENT IS SIGNING THIS AGREEMENT, AND IS
                  AGREEING TO BE BOUND BY AND BECOME A PARTY TO THIS AGREEMENT.
                </p>
                <p>
                  This Agreement do not cover hosting, installation or
                  consultancy services.
                </p>
                <p>
                  DNV GL AS is a Norwegian registered limited company,
                  registration number 945 748 931, with headquarters at
                  Veritasveien 1, 1322 Høvik. DNV GL AS holds necessary rights
                  to the Product.
                </p>
                <p>
                  <strong>1. Definitions</strong>
                </p>
                <p>
                  1.1 Agreement: means these terms and conditions as well as the
                  agreed scope of delivery, including fees and duration as set
                  out in the Order Form or as otherwise explicitly agreed
                  between the Parties in writing.
                </p>
                <p>
                  1.2 Customer Group: means all Customer majority owned
                  subsidiaries as well as Customer’s parent company and any
                  other subsidiaries thereof.
                </p>
                <p>
                  1.3 DNV GL Group: means (i) DNV GL, all its direct and
                  indirect owner and its affiliates and (ii) DNV GL’s
                  subcontractors (of any tier) and their affiliates.
                </p>
                <p>
                  1.4 Documentation: means DNV GL’s on-line instruction and
                  information guides and manuals for the Product as published
                  from time to time by DNV GL.
                </p>
                <p>
                  1.5 Dongle: A hardware safety key that must be inserted into
                  the PC and allows the Product to be installed and used on the
                  PC where the dongle is installed. The Dongle shall only be
                  used at a designated Customer site agreed between the parties.
                </p>
                <p>
                  1.6 Service Level Agreement, hereafter referred to as SLA:
                  Means the maintenance and support services provided by DNV GL
                  as set out herein.
                </p>
                <p>
                  1.7 Standalone License: Allows the Product to be installed and
                  used on a designated PC at a designated Customer site.
                </p>
                <p>
                  1.8 Time-limited Licenses: Restricted and time-limited rights
                  to use the Product for the limited period of time agreed
                  between the parties. Unless otherwise agreed, such
                  Time-limited Licenses are valid for 12 (twelve) months.
                </p>
                <p>
                  1.9 User: means any physical person employed by the Customer
                  or who otherwise acts on behalf thereof and that has Access to
                  the Product, regardless of actual use. "Access" means, by any
                  type of software, connection or platform, any possibility to
                  register in, view, or influence data from, the Product.
                </p>
                <p>
                  <strong>2. License Grant and License Restrictions</strong>
                </p>
                <p>
                  2.1 DNV GL grants Customer a limited, non-transferable,
                  non-exclusive right to use the Product as set out in this
                  Agreement. The license shall be restricted to the type of
                  license and agreed number of users as agreed in this
                  Agreement.
                </p>
                <p>
                  2.2 Unless otherwise agreed in writing between the parties,
                  the license gives Customer a restricted and time-limited rigth
                  to use the Product for 12 (twelve) months, and limited to one
                  personal, single user. Use of the Product by further users
                  requires additional licenses.
                </p>
                <p>
                  2.3 Customer shall access and use the Product solely in
                  accordance with the Documentation and solely for Customer's
                  own business purposes, and solely on computer equipment owned
                  and under the direct control of Customer.
                </p>
                <p>
                  2.4 DNV GL, or its licensors, own and at all times retain all
                  intellectual property rights, including patent, copyright,
                  trade secret, trademark and other proprietary rights, in and
                  to the Product and/or Documentation.
                </p>
                <p>
                  2.5 The License does not include any rights which are not
                  explicitly stated in this Agreement, or otherwise set out in
                  mandatory applicable law. In particular Customer shall not,
                  unless explicitly allowed under applicable mandatory law:
                </p>
                <ul>
                  <li>
                    a) Modify, adapt, decompile, disassemble or reverse engineer
                    the Product, Documentation, layouts, pictures or designs;
                    <a
                      id="here"
                      href="https://www.dnvgl.com/software/software-services/software-support.html"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://www.dnvgl.com/software/software-services/software-support.html
                    </a>{" "}
                  </li>
                  <li>
                    b) Provide for interoperability with its own software or
                    hardware systems without first notifying DNV GL.
                  </li>
                  <li>
                    c) Create derivative works based on the Product or
                    Documentation;
                  </li>
                  <li>
                    d) Make copies of the Product or Documentation, other than
                    as necessary for backup or archival purposes as provided
                    herein or other lawful use;
                  </li>
                  <li>
                    e) Allow any transfer, lease, rental, loan, resale,
                    distribution, sublicense, service bureau-type use on the
                    Internet or otherwise, disclosure or other third party use
                    or access to the Product or Documentation.
                  </li>
                  <li>
                    f) Transfer any Product or the use thereof to a site other
                    than the authorized Customer site.
                  </li>
                  <li>
                    g) Use the DNV GL logo, or any logos or trademarks held by
                    the DNV GL Group, in the conduct of Customer's business;
                  </li>
                  <li>
                    h) Rebrand, or otherwise use the Product in Customer's
                    business without DNV GL's explicit written consent and
                    proper attribution to DNV GL or DNV GL's proprietary rights
                    and/or.
                  </li>
                  <li>
                    i) Alter or remove any copyright and other proprietary
                    rights notices from the Product or Documentation or any
                    copies thereof.
                  </li>
                </ul>
                <p></p>
                <p>
                  2.6 The Product is licensed and provided “AS IS”, and
                  Customer's sole remedies and exclusive warranties, if any, are
                  expressly set out in this Agreement.
                </p>
                <p>
                  2.7 The Agreement includes the sole right to use the version
                  of the product released at the time of purchase of the
                  Product. Any rights to upgrades shall be governed by the SLA.
                </p>
                <p>
                  2.8 The Product and Documentation are licensed and not sold.
                  All right, title and interest in and to the Product, including
                  ownership of all applicable rights in patents, copyrights,
                  trademarks and trade secrets, any copy or part thereof,
                  including all modifications, customizations, bug fixes,
                  updates or any other programs or materials developed during
                  the performance of any maintenance service or otherwise
                  provided by DNV GL, shall not transfer to Customer and shall
                  remain solely with DNV GL.
                </p>
                <p>
                  2.9 No Product is or may be licensed without an initial
                  corresponding applicable SLA between DNV GL and the Customer
                  during the license period.
                </p>
                <p>
                  <strong>3. Payment</strong>
                </p>
                <p>
                  3.1 Customer shall pay the fees for any licenses and SLA
                  together with all applicable charges agreed between the
                  parties.
                </p>
                <p>
                  3.2 Customer shall effect payment as agreed to DNV GL, or
                  another legal entity within the DNV GL Group if specified as
                  payee on the invoice, for the fees reffered to in Article 3.1
                  to DNV GL’s bank account stated on the invoice.
                </p>
                <p>
                  3.3 The fee for the License and the SLA shall be due and
                  payable within 30 (thirty) days from the acceptance of this
                  Agreement.
                </p>
                <p>
                  3.4 DNV GL reserves the right to, and Customer agrees that DNV
                  GL may, increase the SLA fee each year by a maximum of (i) the
                  Norwegian Statistisk Sentralbyrå (Statistics Norway) Wage
                  index “Professional, scientific and technical activities” or
                  (ii) 5%, whichever is the greater.
                </p>
                <p>
                  3.5 If the Customer fails to fulfil its obligations to pay the
                  invoices from DNV&nbsp;GL in accordance with Article 3.3, the
                  Customer shall pay interest on all overdue amounts at (i) a
                  rate of 1% per month or part thereof, or (ii) the highest rate
                  permitted according to the law designated in Article&nbsp;16
                  if this rate is lower.
                </p>
                <p>
                  <strong>4. Term and termination</strong>
                </p>
                <p>
                  4.1 Unless otherwise notified by Customer in writing 60
                  (sixty) days prior to renewal, the License is automatically
                  renewed for additional, corresponding time periods, subject to
                  this Agreement, and further subject to the then-current fees
                  applicable at the time of renewal.
                </p>
                <p>
                  4.2 All Time-limited Licenses shall include SLA for the entire
                  License Period, to be charged at the then current rates.
                </p>
                <p>
                  4.3 DNV GL shall be entitled to terminate this Agreement
                  without cause with 60 (sixty) days written notice prior to
                  renewal.
                </p>
                <p>
                  4.4 In the event that DNV GL has reason to believe that an
                  infringement could exist, or if there are allegations that the
                  Product or the SLA infringe third party intellectual property
                  rights, DNV GL shall be entitled to terminate the Agreement
                  with immediate effect. In such case Customer’s sole remedy and
                  DNV GL’s entire liability shall be limited to the restitution
                  of the license fee(s) paid to DNV GL for the 12 (twelve)
                  months immediately preceding such termination, and CUSTOMER
                  RELEASES, WAIVES, AND DISCHARGES ALL OTHER CLAIMS OF ANY KIND
                  OR NATURE AGAINST THE DNV GL GROUP OF COMPANIES WHETHER IN
                  CONTRACT, TORT OR OTHERWISE.
                </p>
                <p>
                  4.5 DNV GL may terminate this Agreement with immediate effect
                  if the Customer fails to pay the fee for Licenses, SLA or any
                  other sum due hereunder.
                </p>
                <p>
                  4.6 Each Party may terminate this Agreement with immediate
                  effect (i) if the other Party is in breach of this Agreement
                  which is either incapable of being remedied or (if remediable)
                  has not been remedied within 30 days of written notice to the
                  breaching Party or (ii) if the other Party enters into
                  liquidation, makes a voluntary arrangement with its creditors,
                  or becomes subject to an administrative order.
                </p>
                <p>
                  4.7 Upon termination of this Agreement according to this
                  Article 4, and to the extent allowed by applicable mandatory
                  law, all rights granted hereunder shall immediately terminate
                  and all Product, Documentation and other proprietary
                  Information of DNV GL in the possession of Customer or under
                  its control, shall be immediately returned to DNV GL.
                </p>
                <p>
                  <strong>5. Confidentiality</strong>
                </p>
                <p>
                  5.1 Customer shall at all times protect the secrecy of, and
                  avoid disclosure and unauthorized use of, DNV GL’s
                  Confidential Information.
                </p>
                <p>
                  5.2 Except as otherwise provided herein, the parties shall not
                  make each other’s Confidential Information available to any
                  third party (other than those of its employees under
                  nondisclosure obligations), or to use each other’s
                  Confidential Information for any purpose other than as
                  contemplated hereunder.
                </p>
                <p>
                  5.3 DNV GL may, subject to this Agreement, share Confidential
                  Information and results of audits with its parent, parent
                  subsidiaries, subsidiaries affiliates and licensors for the
                  purpose of administering and performing its obligations
                  hereunder and under agreements with its licensors.
                </p>
                <p>
                  5.4 “Confidential Information”: means all information
                  exchanged between the parties, but shall not include any
                  information that: (i) is at the time of disclosure, or
                  subsequently becomes, publicly known except by breach of the
                  Agreement; (ii) a Party receives (“Recipient”) from a third
                  party, who is not under an obligation of confidentiality to
                  Discloser; (iii) is independently developed by the Recipient
                  without use of, or reference to, Discloser’s Confidential
                  Information, or (iv) is required by law to be disclosed by
                  Recipient.
                </p>
                <p>
                  5.5 Customer acknowledges and agrees that irrespective of
                  whether identified as confidential or not, the Agreement, the
                  Product and Documentation are all Confidential Information of
                  DNV GL and/or its licensors.
                </p>
                <p>
                  5.6 DNV GL shall have the right to make reference to the
                  Customer’s name in proposals or other similar submissions made
                  to other prospective customers. Unless otherwise agreed, any
                  other publications related to DNV GL’s provision of services
                  to the Customer under this Agreement shall be subject to the
                  Customer’s prior approval.
                </p>
                <p>
                  5.7 DNV GL is continuously improving its services to the
                  industry to fulfill its purpose, which is to safeguard life,
                  property and the environment. For this purpose, the customer
                  acknowledges that DNV GL shall hold a right to use and process
                  any information generated or collected under or in connection
                  with this Agreement in an anonymized and aggregated form.
                </p>
                <p>
                  <strong>6. Intellectual Property Rights</strong>
                </p>
                <p>
                  6.1 As between Customer and DNV GL, DNV GL owns all
                  intellectual property rights, including patent, copyright,
                  trade secret, trademark and other proprietary rights, in and
                  to the Product, Documentation and/or services provided in
                  connection with the installation and/or use of the Product
                  and/or Documentation.
                </p>
                <p>
                  6.2 Customer shall hold a limited, restricted,
                  non-transferrable, non-exclusive right to use Documentation
                  provided by DNV GL for the duration of the SLA, regardless of
                  the type of license.
                </p>
                <p>
                  6.3 DNV, DNV GL and the DNV GL figure mark are trademarks held
                  by DNV GL. This Agreement does not imply any license to use
                  these trademarks unless explicitly agreed in writing between
                  the parties.
                </p>
                <p>
                  <strong>7. Audit</strong>
                </p>
                <p>
                  7.1 Customer shall maintain complete and accurate books and
                  records regarding compliance with Customer’s obligations as
                  set out in this Agreement.
                </p>
                <p>
                  7.2 DNV GL shall have the right at its own expense, during
                  Customer’s normal business hours and upon giving Customer a
                  reasonable prior written notice, to audit Customer’s records
                  and systems, including, but not limited to, individual
                  computers, to verify Customer’s compliance with the Agreement.
                </p>
                <p>
                  7.3 Customer grants DNV GL the right to include functions in
                  the Product which inform DNV GL of Customer’s compliance with
                  the requirements set out herein.
                </p>
                <p>
                  7.4 If the Audit reveals any unreported usage, Customer shall
                  promptly either purchase the necessary number of licenses for
                  the relevant time-period or stop the unauthorized use and
                  return any unauthorized copies and related material to DNV GL.
                  In case of unreported usage the Customer shall reimburse DNV
                  GL for its cost and expenses related to the audit.
                </p>
                <p>
                  7.5 DNV GL reserves all rights in case the Audit reveals
                  breach(es) of the Agreement other than as set out in Article
                  7.4.
                </p>
                <p>
                  <strong>8. EXCLUSION AND LIMITATION OF LIABILITY</strong>
                </p>
                <p>
                  <strong>8.1 EXCLUSION OF LIABILITY</strong>
                </p>
                <p>
                  <strong>
                    8.1.1 TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN
                    NO EVENT SHALL DNV GL OR THE DNV GL GROUP BE LIABLE FOR ANY
                    SPECIAL, INCIDENTIAL, PUNITIVE, INDIRECT, OR CONSEQUENTIAL
                    DAMAGES WHATSOEVER (INCLUDING, BUT NOT LIMITED TO, DAMAGES
                    FOR LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF USE, LOSS OF
                    DATA, LOSS OF CONFIDENTIAL OR OTHER INFORMATION, FOR
                    BUSINESS INTERRUPTION, FOR NEGLIGENCE OR FOR ANY OTHER LOSS
                    WHATSOEVER) HOWSOEVER CAUSED AND REGARDLESS OF THE THEORY OF
                    LIABILITY, ARISING OUT OF OR IN ANY WAY RELATED TO THIS
                    AGREEMENT OR THE USE OF OR INABILITY TO USE THE PRODUCT OR
                    DOCUMENTATION, EVEN IF DNV GL HAS BEEN ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES.
                  </strong>
                </p>
                <p>
                  <strong>8.2 LIMITATION OF LIABILITY:</strong>
                </p>
                <p>
                  <strong>
                    8.2.1 DNV GL AND DNV GL GROUP'S MAXIMUM CUMULATIVE LIABILITY
                    TO CUSTOMER AND CUSTOMER GROUP FOR DAMAGES ARISING OUT OF OR
                    RELATING TO THIS AGREEMENT INCLUDING ANY AND ALL USE OF THE
                    PRODUCT AND/OR DOCUMENTATION, WHETHER BASED UPON CONTRACT,
                    TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR ANY OTHER
                    BASIS FOR LIABILITY, SHALL NOT EXCEED THE AMOUNTS ACTUALLY
                    PAID BY CUSTOMER TO DNV GL FOR THE PREVIOUS TWELVE (12)
                    MONTH PERIOD UNDER THIS AGREEMENT. THIS LIMITATION SHALL NOT
                    APPLY IN THE EVENT OF GROSS NEGLIGENCE OR WILLFUL MISCONDUCT
                    BY DNV GL SENIOR MANAGEMENT OR SENIOR TECHNICAL PERSONNEL.
                  </strong>
                </p>
                <p>
                  <strong>9. INDEMNIFICATION</strong>
                </p>
                <p>
                  <strong>
                    9.1 CUSTOMER SHALL INDEMNIFY, DEFENDAND HOLD HARMLESS DNV GL
                    AND THE DNV GL GROUP AGAINST ANY AND ALL CLAIMS MADE BY
                    OTHER COMPANIES IN THE CUSTOMER GROUP AGAINST DNV GL AND/OR
                    THE DNV GL GROUP BASED UPON DNV GL’S PERFORMANCE OR
                    NON-PERFORMANCE OF ITS OBLIGATIONS UNDER THIS AGREEMENT.
                  </strong>
                </p>
                <p>
                  <strong>
                    9.2 CUSTOMER SHALL INDEMNIFY, DEFENDAND HOLD HARMLESS DNV GL
                    AND THE DNV GL GROUP AGAINST DAMAGES AND ANY ASSOCIATED
                    LEGAL COST THAT MAY BE AWARDED OR AGREED TO BE PAID TO ANY
                    THIRD PARTY IN RESPECT OF ANY CLAIM OR ACTION CAUSED BY OR
                    ARISING FROM CUSTOMER’S OR CUSTOMER GROUP'S USE OF THE
                    PRODUCT.
                  </strong>
                </p>
                <p>
                  <strong>
                    9.3 DNV GL WILL INDEMNIFY CUSTOMER AGAINST DAMAGES AND
                    REASONABLE LEGAL EXPENSE THAT MAY BE FINALLY AWARDED BY A
                    COURT OF COMPETENT JURISDICTION TO ANY THIRD PARTY RESULTING
                    FROM A CLAIM OR ACTION FOR INFRINGEMENT OF ANY THIRD PARTY
                    INTELLECTUAL PROPERTY RIGHT RESULTING FROM CUSTOMER'S USE OF
                    THE PRODUCT IN ITS ORIGINAL, AS-PROVIDED BY DNV GL FORM.
                  </strong>
                </p>
                <p>
                  <strong>10. Errors in Products</strong>
                </p>
                <p>
                  10.1 Customer has a duty to inspect the Product without undue
                  delay after granted access to the Product.
                </p>
                <p>
                  10.2 All and any errors in Product shall be governed by the
                  SLA, and{" "}
                  <strong>
                    CUSTOMER RELEASES AND WAIVES ALL CLAIMS FOR REMEDIES BASED
                    UPON BREACH OF CONTRACT WITH RESPECT TO SUCH ERRORS.
                  </strong>
                </p>
                <p>
                  10.3 All conditions, warranties, terms, representations and
                  undertakings express or implied relating to fitness for
                  purpose, satisfactory quality, correspondence with samples and
                  defects in materials, design and workmanship are excluded. THE
                  WARRANTIES AND REMEDIES SET FORTH IN THIS AGREEMENT ARE
                  EXCLUSIVE AND IN LIEU OF ALL OTHERS, ORAL OR WRITTEN, EXPRESS,
                  IMPLIED OR STATUTORY, LEGAL OR EQUITABLE.DNV GL MAKES NO OTHER
                  REPRESENTATIONS, WARRANTIES OR INDEMNITIES, WHETHER EXPRESS,
                  IMPLIED OR STATUTORY, INCLUDING BUT NOT LIMITED TO THE IMPLIED
                  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
                  PURPOSE, RESPECTING THIS LICENSE OR THE PRODUCT OR
                  DOCUMENTATION, AND ALL WARRANTIES ARISING FROM COURSE OF
                  DEALING OR USAGE OF TRADE ARE HEREBY EXCLUDED
                </p>
                <p>
                  10.4 DNV GL does not warrant (i) any results or suitability of
                  results from Customer’s use of the Productand Documentation,
                  or (ii) that the operation of the Product will be
                  uninterrupted or error free, or (iii) that the functions
                  contained in the Product will meet Customer's requirements.
                </p>
                <p>
                  <strong>11. Sub-contractors</strong>
                </p>
                <p>
                  11.1 DNV GL shall be entitled to delegate all or parts of the
                  performance of the services under this Agreement to
                  sub-contractors.
                </p>
                <p>
                  <strong>12. Assignment</strong>
                </p>
                <p>
                  12.1 DNV GL shall be entitled to assign its rights and
                  obligations under this Agreement to any company within the DNV
                  GL Group. Customer shall be informed of such assignment in
                  writing.
                </p>
                <p>
                  12.2 Customer may not delegate any of its obligations or
                  assign any of its rights or remedies hereunder.
                </p>
                <p>
                  <strong>13. Force Majeure and Restrictions on Trade</strong>
                </p>
                <p>
                  13.1 Neither party shall be in breach of this Agreement, nor
                  liable for any failure or delay in performance hereunder if
                  the cause of such failure or delay is attributable to events
                  beyond the reasonable control of the affected party, including
                  but not limited to armed conflict, terrorist attack, civil
                  war, riots, toxic hazards, epidemics, natural disasters,
                  extreme weather, fire, explosion, failure of utility service,
                  labour disputes, breakdown of infrastructure, sanctions, or
                  any public restrictions following any of the incidents above,
                  or any other force majeure occurrence.
                </p>
                <p>
                  13.2 In the event of a force majeure occurrence, the affected
                  party shall notify the other party without undue delay of the
                  particulars of the situation. Either party shall be entitled
                  to terminate the Agreement with immediate effect should the
                  force majeure occurrence last for more than thirty (30) days.
                </p>
                <p>
                  13.3 Both parties may terminate this Agreement with immediate
                  effect, without any liability or penalties, if the party, its
                  ultimate parent company or its ultimate parent company’s
                  subsidiaries or affiliates are or become subject to sanctions
                  or penalties imposed by a national government, the United
                  Nations, the European Union or similar organisations related
                  to the Work which is provided hereunder, or if the Work would
                  be considered to be illegal or in conflict with applicable law
                  for the respective party, its subcontractors and/or its
                  subcontractor’s parent companies.
                </p>
                <p>
                  <strong>14. Insurance</strong>
                </p>
                <p>
                  14.1 Customer agrees to maintain a market standard general
                  liability insurance. Any insurance maintained by DNV GL shall
                  not affect the insurance company's right to rely on the
                  limitations of liability andexclusions of remedy set out in
                  this Agreement to the same extent as DNV GL.
                </p>
                <p>
                  <strong>15. Severability</strong>
                </p>
                <p>
                  15.1 If any term of this Agreement is held to be invalid or
                  unenforceable by any court or body of competent jurisdiction,
                  then that term shall be deemed severable from this Agreement,
                  and the remaining provisions shall stay in full force and
                  effect.
                </p>
                <p>
                  <strong>16. Governing law and legal venue</strong>
                </p>
                <p>
                  16.1 This Agreement shall be governed and construed in
                  accordance with the laws of NORWAY, excluding the laws
                  pertaining to conflicts or choice of law, in all respects,
                  including but not limited to all matters of validity,
                  interpretation, construction and performance.
                </p>
                <p>
                  16.2 Any dispute arising out of, in relation to or as a
                  consequence of this Agreement, which cannot be settled
                  amicably through negotiations between the parties, shall be
                  brought exclusively in the courts of OSLO.
                </p>
                <p>
                  <strong>17. Export</strong>
                </p>
                <p>
                  17.1 Customer acknowledges that the Product may be subject to
                  export and import control. Customer agrees that no Product
                  will be exported (or re-exported or resold in a country of
                  installation), directly or indirectly, separately or as part
                  of a system, without Customer, at its own cost, first
                  complying with all laws and regulations applicable to export
                  and import control.
                </p>
                <p>
                  <strong>18. Miscellaneous</strong>
                </p>
                <p>
                  18.1 The waiver by either party of, or failure of either party
                  to exercise in any respect, any right provided herein shall
                  not be deemed a waiver of such right in the future or of any
                  other right hereunder.
                </p>
                <p>
                  18.2 The Product is provided to non-Department of Defense
                  (“DoD”) agencies with RESTRICTED RIGHTS and its supporting
                  documentation is provided with LIMITED RIGHTS. Use,
                  reproduction, or disclosure by the United States Government is
                  subject to the restrictions and notice requirement as set
                  forth in subparagraphs (a) through (c) of the Commercial
                  Computer Software License clause at FAR 52.227-19. When
                  Product is provided to DOD agencies, the Government's rights
                  in software, supporting documentation, and technical data are
                  governed by the restrictions in the Technical Data Commercial
                  Items clause at DFARS 252.227-7015 and DFARS 227.7202.
                  Manufacturer is DNV GL.
                </p>
                <p></p>
                <p>
                  <strong>SLA</strong>
                </p>
                <p>
                  <strong>1. Introduction</strong>
                </p>
                <p>
                  1.1 This is not a standalone document and shall not be valid
                  unless attached to the Agreement.
                </p>
                <p>
                  1.2 Any terms used in this document which are not defined
                  herein shall have the same meaning ascribed to them by this
                  Agreement.
                </p>
                <p>
                  1.3 The SLA does not include third party software and
                  customizations related to the licensed Product.
                </p>
                <p>
                  <strong>2. Services</strong>
                </p>
                <p>2.1 Scope of Services</p>
                <p>
                  Customer is entitled to the following services (“Services”):
                </p>
                <ul>
                  <li>a) Rights to upgrade to new versions of the Product.</li>
                  <li>
                    b) Technical support related to incident and question
                    handling and software deficiencies, as applicable to the
                    Product.
                  </li>
                  <li>c) Access to DNV GL’s customer portal.</li>
                  <li>d) Invitation to Software conferences.</li>
                  <li>
                    e) Support is limited to purchased modules and does NOT
                    include third party software or Customer integrations
                  </li>
                </ul>
                <p></p>
                <p>2.2 Service Hours</p>
                <p>
                  The Services will be provided 24 hours a day from Monday 8
                  a.m. CET until Friday 4 p.m. CET, excluding Bank Holidays in
                  the respective regions where the support hubs are located.
                </p>
                <p>2.3 New Software Releases</p>
                <p>
                  DNV GL will on a regular basis issue new versions of the
                  Product which may incorporate ordinary software improvements,
                  deficiency resolutions and revised User Documentation.
                </p>
                <p>2.4 Technical Support Service</p>
                <p>
                  2.4.1 DNV GL reserves the right to terminate support related
                  to products not upgraded to the latest version during the last
                  3 years, provided such upgrades are made available to
                  Customer.
                </p>
                <p>
                  2.4.2 Customer may register a request (issues) via the
                  Customer Portal or DNV GL may register each support request
                  from Customer and issue unique reference identification via
                  e-mail. A registered support request becomes a case in the
                  system and it has a unique identifier.The unique identifier
                  and further responses will be sent to Customer’s relevant
                  technical contact. Follow-up response by DNV GL to convey
                  status of the support resolution is guaranteed on the Customer
                  Portal according to severity of problem as specified in
                  Article 2.7 below.
                </p>
                <p>2.5 Deficiencies</p>
                <p>
                  2.5.1 In the event that Product does not work in accordance
                  with the Product description, Customer shall report the
                  deficiency to DNV GL.Deficiency reports shall include
                  sufficient documentation for DNV GL to recreate the reported
                  deficiency and efficiently investigate the cause of the
                  deficiency and its resolution.
                </p>
                <p>
                  2.5.2 Upon receipt of deficiency reports DNV GL is obligated
                  to start investigations without undue delay and provide if
                  possible a workaround or solution, in line with service
                  priorities described in article 2.7 below. If a solution
                  cannot be provided, the software deficiencies will be logged
                  in the DNV GL’s change management tool and considered for
                  future release.
                </p>
                <p>
                  2.5.3 DNV GL shall upon request be given remote access to
                  Customer’s computing environment with sufficient administrator
                  rights to investigate the cause of deficiency directly on
                  Customer’s databases.
                </p>
                <p>
                  2.5.4 If support requires a VPN connection, a DNV GL Software
                  VPN account must be established.
                </p>
                <p>
                  2.5.5 If DNV GL concludes that the deficiency cannot be
                  resolved using remote connection, Customer shall send all
                  requested documentation, filesand database backups to DNV GL
                  for debugging at DNV GL’s premises.
                </p>
                <p>
                  2.5.6 If Customer fails to supply required documentation,
                  files and databases or the remote access cannot be established
                  due to reasons outside DNV GL’s control, DNV GL cannot be held
                  liable if follow-up response priorities are not met.
                </p>
                <p>
                  2.5.7 DNV GL may choose, in its sole discretion, to only issue
                  software patches related to the latest release of the Product.
                </p>
                <p>2.6 Service Priorities</p>
                <p>
                  DNV GL shall provide follow-up response and resolution in
                  accordance with severity of the Customer’s issue as specified
                  below.
                </p>
                <p>
                  • Priority Normal Issue does not hinder day-to-day work but
                  may affect work schedule.
                </p>
                <p>
                  DNV GL shall, at its discretion, work on a correction of the
                  fault or find workaround as fast as possible within normal
                  working hours and may include resolutions to these issues in a
                  future release of Licensed Software and/or associated
                  documentation.
                </p>
                <p>
                  • Priority High Issue hinders day-to-day work and affect work
                  schedule.
                </p>
                <p>
                  DNV GL shall prioritize cases, at its discretion, and work on
                  a correction of the fault or find workaround within normal
                  working hours and include resolutions to the cases in a future
                  release of Product and/or associated documentation.
                </p>
                <p>
                  • Priority Very High Issue does not allow work to continue or
                  severely hinders day-to-day work.
                </p>
                <p>
                  DNV GL shall start work within next working day and continue
                  during normal working hours until the fault is corrected or an
                  interim workaround or software patch is provided.
                </p>
                <p>
                  DNV GL shall, at its discretion, include resolutions to
                  priority very high cases in a future release of the Product
                  and/or associated documentation.
                </p>
                <p>
                  <strong>3. Customer’s Responsibilities</strong>
                </p>
                <p>
                  3.1 Customer shall, in case of user base of more than 6
                  people, appoint one person acting as primary technical contact
                  towards DNV GL regarding the scope of Services, see Article
                  2.1 above.
                </p>
                <p>
                  3.2 Customer shall maintain a list of contact details as
                  included in article 5.3 below for personnel entitled to
                  contact DNV GL. Customer shall promptly inform DNV GL about
                  changes to this list.
                </p>
                <p>
                  3.3 Customer shall ensure that technical personnel are
                  available to provide information and assistance whenever
                  required by DNV GL in the course of investigating cases.
                </p>
                <p>
                  3.4 Customer shall maintain a list of contact details for
                  personnel operating the Product and shall ensure all personnel
                  operating the Product, are trained by DNV GL or DNV GL’s
                  representative.
                </p>
                <p>
                  3.5 If Customer decides not to use DNV GL to install or
                  upgrade to new versions of the Product, Customer shall be
                  responsible (i) for certifying its relevant personnel and (ii)
                  to document installations and upgrades of the Product
                  according to DNV GL’s procedures.Such documentation shall be
                  approved by DNV GL before any support may be given.
                </p>
                <p>
                  3.6 Customer is responsible for operating backup procedures
                  and safe storage of backups adequate for its business.
                </p>
                <p>
                  3.7 Customer shall, when applicable, operate a separate test
                  (staging) environment, that is an accurate reflection of the
                  production system, where new Product versions and patches are
                  installed and tested before being accepted as a production
                  environment.
                </p>
                <p>
                  3.8 Customer shall ensure that the system software platform is
                  compatible with DNV GL’s software and hardware requirements
                  for the installed version of the Product
                </p>
                <p>
                  3.9 Customer shall undertake the implementation of new Product
                  versions, updates, software patches and database migrations at
                  own cost.
                </p>
                <p>
                  <strong>4. Additional services</strong>
                </p>
                <p>
                  In addition to Services resulting from obligations as stated
                  in Article &lrm;2 above, DNV GL will, at Customer’s request
                  and cost, support and advise Customer in training, practical
                  use and operation of the Product. Such services may include:
                </p>
                <p>
                  • Standard and tailor-made training related to the Product,
                </p>
                <p>• Consultancy in practical use of the Product,</p>
                <p>
                  • Assistance related to upgrades, data migration, integrations
                  and tailored Customer configuration of the Product,
                </p>
                <p>• Assistance related to database tuning,</p>
                <p>• On-site Services,</p>
                <p>• Assistance related to disaster recovery.</p>
                <p>
                  The further scope and terms of such additional services shall
                  be agreed between DNV GL and the Customer, and are subject to
                  a separate agreement between the parties.
                </p>
                <p>
                  <strong>5. Contact details</strong>
                </p>
                <p>5.1 DNV GL’s contact information:</p>
                <p>
                  The global website DNV GL’s world-wide contact details.The
                  global website also includes instructions to Customer on how
                  to register named users in DNV GL’s Customer Portal.
                </p>
                <p>5.2 Information from DNV GL</p>
                <p>
                  DNV GL will keep Customer updated on important product
                  information, via Customer Portal or e-mail.
                </p>
              </div>
            </Content>
            <BtnArea>
              <button
                onClick={() => {
                  props.setShow(false);
                }}
              >
                Close
              </button>
            </BtnArea>
          </Wrapper>
        </BackLayer>
      </div>
    </Container>
  );
};

const Scroll = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <Test setShow={setShow} />}
      <a
        href="#here"
        onClick={() => {
          setShow(true);
        }}
      >
        show content
      </a>
    </>
  );
};

export default Scroll;
