import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Form } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectEditData)
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onEdit({
        id: f.id,
        home_score: +v.home_score,
        away_score: +v.away_score,
        odds: +v.odds,
        bet_amount_limit: +v.bet_amount_limit,
        single_bet_limit: +v.single_bet_limit,
        single_bet_least: +v.single_bet_least,
        auto_odds_amount_unit: +v.auto_odds_amount_unit,
        auto_odds_rate_unit: +v.auto_odds_rate_unit,
        is_auto_odds: v.is_auto_odds,
        is_open_bet: true,
        is_active: true,
      })
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  return (
    <PopupModal
      visible={visible}
      title="編輯比分"
      onCancel={() => setVisible(false)}
      onOk={() => handleSubmit()}
      afterClose={() => form.resetFields()}
      destroyOnClose
    >
      {f && (
        <DataForm
          form={form}
          values={{
            home_score: f.home_score,
            away_score: f.away_score,
            odds: f.odds,
            bet_amount_limit: f.bet_amount_limit,
            single_bet_limit: f.single_bet_limit,
            single_bet_least: f.single_bet_least,
            auto_odds_amount_unit: f.auto_odds_amount_unit,
            auto_odds_rate_unit: f.auto_odds_rate_unit,
            is_auto_odds: f.is_auto_odds,
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
