import { createStore, useStore } from "zustand"
import { persist } from "zustand/middleware"

interface IUserProps {
  score?: number
  welcomeModal?: boolean
  winnerModal?: boolean
  winner?: boolean
  initialLoading?: boolean
  pageBonus?: boolean
  numberQuestion?: number
  bonusModal?: boolean
}

interface IScoreStore extends IUserProps {
  handleData(newData: IUserProps): void
}

const userDataStore = createStore<IScoreStore>()(
  persist(
    (set) => ({
      score: 0,
      welcomeModal: true,
      winner: false,
      initialLoading: true,
      pageBonus: false,
      numberQuestion: 0,
      winnerModal: false,
      bonusModal: false,
      handleData: (newData) => set((data) => ({ ...data, ...newData })),
    }),
    {
      name: "userData",
    },
  ),
)

export const useDataStates = () => useStore(userDataStore)
