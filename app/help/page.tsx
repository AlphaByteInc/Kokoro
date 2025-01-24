import { LegalLayout } from '../components/LegalLayout';

export default function HelpPage() {
  return (
    <LegalLayout title="ヘルプ">
      <h2 className="text-lg font-bold mb-8">よくある質問</h2>

      <div className="divide-y space-y-8">
        <section>
          <h3 className="text-sm font-bold text-gray-900 mb-4">アカウントについて</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-1">Q: アカウントの登録は無料ですか？</h4>
              <p className="text-sm text-gray-600">A: はい、アカウントの登録は完全無料です。</p>
            </div>

            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-1">Q: メールアドレスを変更するにはどうすればいいですか？</h4>
              <p className="text-sm text-gray-600">A: プロフィール設定画面から変更可能です。</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold text-gray-900 mb-4 pt-8">相談について</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-1">Q: 相談は匿名で行えますか？</h4>
              <p className="text-sm text-gray-600">A: はい、ユーザーネームのみが表示され、実名は表示されません。年齢や交際状況の表示も任意です。</p>
            </div>

            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-1">Q: 相談を削除することはできますか？</h4>
              <p className="text-sm text-gray-600">A: はい、ご自身が投稿した相談は、いつでも削除することができます。</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold text-gray-900 mb-4 pt-8">プライバシーとセキュリティ</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-1">Q: 個人情報は安全に保護されていますか？</h4>
              <p className="text-sm text-gray-600">A: はい、当サイトは最新のセキュリティ対策を実施しており、ユーザーの個人情報は適切に保護されています。</p>
            </div>

            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-1">Q: 不適切な投稿を見つけた場合はどうすればいいですか？</h4>
              <p className="text-sm text-gray-600">A: 各投稿の報告機能を使用するか、お問い合わせフォームからご連絡ください。</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xs font-medium text-gray-900 mb-2">お困りの場合は</h3>
        <p className="text-sm text-gray-600">
          上記で解決しない場合は、
          <a href="/contact" className="text-pink-600 hover:text-pink-700">
            お問い合わせフォーム
          </a>
          からお気軽にご連絡ください。
        </p>
      </div>
    </LegalLayout>
  );
}