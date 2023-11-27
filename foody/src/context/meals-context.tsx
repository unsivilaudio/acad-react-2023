import { produce } from 'immer';
import {
    createContext,
    useContext,
    useReducer,
    useMemo,
    type PropsWithChildren,
} from 'react';

type Meal = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
};

type MealsContextValue = {
    meals: Meal[];
    search: string;
    setMeals(meals: Meal[]): void;
    onChangeSearch(term: string): void;
    setMealsLoading(loading: boolean): void;
    isLoading: boolean;
};

const MealsContext = createContext<MealsContextValue | null>(null);
export const useMealsContext = () => {
    const ctx = useContext(MealsContext);
    if (!ctx) {
        throw new Error(
            'This hook must be used in the scope of the MealContextProvider component.',
        );
    }

    return ctx;
};

enum Actions {
    'SET_MEALS',
    'SEARCH_MEALS',
    'MEALS_LOADING',
}

type SearchMeals = {
    type: Actions.SEARCH_MEALS;
    payload: { term: string };
};

type SetMeals = {
    type: Actions.SET_MEALS;
    payload: Meal[];
};

type MealsLoading = {
    type: Actions.MEALS_LOADING;
    payload: boolean;
};

type MealsActions = SearchMeals | SetMeals | MealsLoading;

const INITIAL_STATE = {
    meals: [] as Meal[],
    search: '',
    isLoading: false,
};

const mealsReducer = produce((state, action: MealsActions) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.SET_MEALS:
            state.meals = payload;
            break;
        case Actions.SEARCH_MEALS:
            state.search = payload.term.toLowerCase();
            break;
        case Actions.MEALS_LOADING:
            state.isLoading = payload;
            break;
    }

    return state;
}, INITIAL_STATE);

export default function MealsContextProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(mealsReducer, INITIAL_STATE);

    const handlers = useMemo(
        () => ({
            setMeals(meals: Meal[]) {
                dispatch({ type: Actions.SET_MEALS, payload: meals });
            },

            onChangeSearch(term: string) {
                dispatch({ type: Actions.SEARCH_MEALS, payload: { term } });
            },

            setMealsLoading(loading: boolean) {
                dispatch({ type: Actions.MEALS_LOADING, payload: loading });
            },
        }),
        [],
    );

    const filteredMeals = useMemo(() => {
        return state.search !== ''
            ? state.meals.filter(
                  (meal) =>
                      meal.name.toLowerCase().includes(state.search) ||
                      meal.description.toLowerCase().includes(state.search),
              )
            : state.meals;
    }, [state.meals, state.search]);

    return (
        <MealsContext.Provider
            value={{ ...state, ...handlers, meals: filteredMeals }}
        >
            {children}
        </MealsContext.Provider>
    );
}
