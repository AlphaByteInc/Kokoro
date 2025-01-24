import { LegalLayout } from '../components/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout title="利用規約">
      <h2>利用規約</h2>
      
      <p>この利用規約（以下、「本規約」といいます。）は、ココロの相談室（以下、「当社」といいます。）がこのウェブサイトで提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。</p>

      <h3>第1条（適用）</h3>
      <p>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>

      <h3>第2条（利用登録）</h3>
      <ol>
        <li>本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</li>
        <li>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります。</li>
      </ol>

      <h3>第3条（禁止事項）</h3>
      <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
      <ul>
        <li>法令または公序良俗に違反する行為</li>
        <li>犯罪行為に関連する行為</li>
        <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
        <li>他のユーザーに対する誹謗中傷、プライバシーの侵害</li>
        <li>その他、当社が不適切と判断する行為</li>
      </ul>

      <h3>第4条（本サービスの提供の停止等）</h3>
      <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>

      <h3>第5条（利用制限および登録抹消）</h3>
      <p>当社は、以下の場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</p>

      <h3>第6条（保証の否認および免責事項）</h3>
      <p>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</p>

      <h3>第7条（サービス内容の変更等）</h3>
      <p>当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>

      <h3>第8条（利用規約の変更）</h3>
      <p>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p>

      <p className="text-sm text-gray-500 mt-8">最終更新日：2024年4月1日</p>
    </LegalLayout>
  );
}