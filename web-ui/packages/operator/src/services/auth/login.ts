import handleError from '../utils/handleError'

export default async () => {
  try {
    return {}
  } catch (err: any) {
    return handleError(err.data)
  }
}
