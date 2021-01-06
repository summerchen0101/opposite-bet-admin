import PopupModal from '@/components/PopupModal'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onCreate({
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
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  const handleCancel = () => {
    form.resetFields()
    setVisible(false)
  }
  return (
    <PopupModal
      visible={visible}
      title="新增玩法細項"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          home_score: null,
          away_score: null,
          odds: 7.5,
          bet_amount_limit: 30000000,
          single_bet_limit: 100000,
          single_bet_least: 100,
          auto_odds_amount_unit: 1000000,
          auto_odds_rate_unit: 0.1,
          is_auto_odds: true,
          // is_open_bet: true,
          // is_active: true,
          // section_id: null,
          // play_id: null,
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
