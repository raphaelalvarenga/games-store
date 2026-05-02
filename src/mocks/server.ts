import { setupServer } from 'msw/node'
import { requestsHandlers } from './requestsHandler'

export const server = setupServer(...requestsHandlers)
