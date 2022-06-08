import create from 'zustand'
import { persist } from "zustand/middleware"


interface Instance {
  instanceId: string
  instanceType: string // 'g5.2xlarge' | 'g5.xlarge' | 'p2.xlarge'
  storage: string
  spot: boolean
  region: string // 'us-west-2' | 'us-west-1' | 'us-east-1' | 'us-east-2'
  dateCreated: string // Date
}

interface Store {
  loggedIn: boolean
  setLoggedIn: () => void

  instances: Instance[]
  addInstance: (instance: Instance) => void
}

// const [loggedIn, setLoggedIn] = useState(false)
const useStore = create(persist<Store>(
  (set, get) => ({
    loggedIn: false,
    setLoggedIn: () => set(state => {
      return {loggedIn: !state.loggedIn}
    }),

    instances: [
      {
        instanceId: 'abc',
        instanceType: 'g5.2xlarge',
        storage: "512",
        spot: true,
        region: 'us-west-2',
        dateCreated: '2022-05-20'
      },
      {
        instanceId: '123',
        instanceType: 'g5.2xlarge',
        storage: "384",
        spot: true,
        region: 'us-east-1',
        dateCreated: '2022-05-23'
      },
    ],
    addInstance: (instance) => set(state => ({
      instances: [...state.instances, instance]
    }))
  }),
  {
    name: "diy-storage", // unique name
    // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
  }
))

export default useStore