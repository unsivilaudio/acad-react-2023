import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function Navigation() {
    return (
        <header className='flex h-14 items-center justify-center bg-[#ff2058]'>
            <nav className='flex h-full items-center justify-center'>
                <ul className='flex items-center justify-center'>
                    <li className='mx-8'>
                        <NavLink
                            className={({ isActive }) =>
                                twMerge(
                                    'font-bold text-[#ecedef] hover:text-[#560061] active:text-[#560061]',
                                    isActive && 'text-[#560061]',
                                )
                            }
                            to='/'
                            end
                        >
                            All Products
                        </NavLink>
                    </li>
                    <li className='mx-8'>
                        <NavLink
                            className={({ isActive }) =>
                                twMerge(
                                    'font-bold text-[#ecedef] hover:text-[#560061] active:text-[#560061]',
                                    isActive && 'text-[#560061]',
                                )
                            }
                            to='/favorites'
                        >
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
