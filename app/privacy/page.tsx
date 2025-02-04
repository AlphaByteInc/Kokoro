import { LegalLayout } from '../components/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout title="プライバシーポリシー">
      <h2>プライバシーポリシー</h2>
      
      <p>ココロの相談室（以下、「当社」といいます。）は、本ウェブサイトで提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>

      <h3>第1条（個人情報の定義）</h3>
      <p>本ポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。</p>

      <h3>第2条（個人情報の収集方法）</h3>
      <p>当社は、ユーザーが利用登録をする際に氏名、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされた取引の状況や内容、サービスの閲覧履歴なども情報として収集することがあります。</p>

      <h3>第3条（個人情報を収集・利用する目的）</h3>
      <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
      <ol>
        <li>本サービスの提供・運営のため</li>
        <li>ユーザーからのお問い合わせに回答するため</li>
        <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
        <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
        <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
      </ol>

      <h3>第4条（個人情報の第三者提供）</h3>
      <p>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>

      <h3>第5条（個人情報の開示）</h3>
      <p>当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。</p>

      <h3>第6条（プライバシーポリシーの変更）</h3>
      <p>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</p>

      <p className="text-sm text-gray-500 mt-8">最終更新日：2024年4月1日</p>
    </LegalLayout>
  );
}