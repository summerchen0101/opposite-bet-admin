import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { CreateFaqCategory, EditFaqCategory } from '../API/category/types'
import { CreateFaq, EditFaq } from '../API/types'
import {
  setCategoryList,
  setCategoryView,
  setEditData,
  setTableData,
} from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getOptions = async () => {
    // try {
    //   const res = await API.permission.options()
    //   dispatch(setPermissionOpts(res.data.permissions))
    // } catch (err) {
    //   apiErr(err)
    // }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.Faq.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async () => {
    try {
      const res = await API.Faq.fetchAll()
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateFaq) => {
    try {
      await API.Faq.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditFaq) => {
    try {
      await API.Faq.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.Faq.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.Faq.active({ id, is_active: status })
      await getTableData()
      message.success('狀態更新成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const getCategoryView = async (id: number) => {
    try {
      const res = await API.FaqCategory.fetchById(id)
      dispatch(setCategoryView(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getCategoryList = async () => {
    try {
      const res = await API.FaqCategory.fetchAll()
      dispatch(setCategoryList(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreateCategory = async (values: CreateFaqCategory) => {
    try {
      await API.FaqCategory.create(values)
      await getCategoryList()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEditCategory = async (values: EditFaqCategory) => {
    try {
      await API.FaqCategory.edit(values)
      await getCategoryList()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDeleteCategory = async (id: number) => {
    try {
      await API.FaqCategory.deleteById(id)
      await getCategoryList()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeCategoryActive = async (id: number, status: boolean) => {
    try {
      await API.FaqCategory.active({ id, is_active: status })
      await getCategoryList()
      message.success('狀態更新成功')
    } catch (err) {
      apiErr(err)
    }
  }

  return {
    getTableData,
    onCreate,
    onEdit,
    getFormData,
    getOptions,
    onDelete,
    changeActive,

    getCategoryList,
    onCreateCategory,
    onEditCategory,
    getCategoryView,
    onDeleteCategory,
    changeCategoryActive,
  }
}
