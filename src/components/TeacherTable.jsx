import React from 'react'
import { Table, TableRow } from 'daisyui'

// define an array of teachers
const teachers = [
    {
        name: 'Mrs. Smith',
        day_of_week_teaches: ['Mon', 'Wed'],
        grades_taught: ['3rd', '4th'],
    },
    {
        name: 'Mr. Jones',
        day_of_week_teaches: ['Tue', 'Thu'],
        grades_taught: ['5th', '6th'],
    },
    {
        name: 'Ms. Johnson',
        day_of_week_teaches: ['Mon', 'Fri'],
        grades_taught: ['1st', '2nd'],
    },
    {
        name: 'Mr. Williams',
        day_of_week_teaches: ['Tue', 'Wed'],
        grades_taught: ['3rd', '4th'],
    },
    {
        name: 'Mrs. Brown',
        day_of_week_teaches: ['Thu', 'Fri'],
        grades_taught: ['5th', '6th'],
    },
    {
        name: 'Mr. Davis',
        day_of_week_teaches: ['Mon', 'Wed'],
        grades_taught: ['1st', '2nd'],
    },
    {
        name: 'Mrs. Wilson',
        day_of_week_teaches: ['Tue', 'Thu'],
        grades_taught: ['3rd', '4th'],
    },
    {
        name: 'Mr. Anderson',
        day_of_week_teaches: ['Mon', 'Fri'],
        grades_taught: ['5th', '6th'],
    },
    {
        name: 'Mrs. Davis',
        day_of_week_teaches: ['Tue', 'Thu'],
        grades_taught: ['4th', '6th'],
    },
]

const datum = teachers.map((obj, i) => {
    console.log(i, obj)
    return (
        <tr key={i}>
            <th>
                <label>
                    <input type='checkbox' className='checkbox' />
                </label>
            </th>
            <td>
                <div className='flex items-center space-x-3'>
                    <div className='avatar'>
                        <div className='mask mask-squircle w-12 h-12'>
                            <img
                                src='https://picsum.photos/50'
                                alt='Avatar Tailwind CSS Component'
                            />
                        </div>
                    </div>
                    <div>
                        <div className='font-bold'>{obj.name}</div>
                        <div className='text-sm opacity-50'>United States</div>
                    </div>
                </div>
            </td>

            <td>
                {obj.day_of_week_teaches.map((item, index) => {
                    switch (item) {
                        case 'Mon':
                            return (
                                <span
                                    key={index}
                                    className='badge badge-primary badge-xs'
                                >
                                    {item}
                                </span>
                            )
                            break
                        case 'Tue':
                            return (
                                <span
                                    key={index}
                                    className='badge badge-secondary badge-xs'
                                >
                                    {item}
                                </span>
                            )
                            break

                        case 'Wed':
                            return (
                                <span
                                    key={index}
                                    className='badge badge-warning badge-xs'
                                >
                                    {item}
                                </span>
                            )
                            break

                        case 'Thu':
                            return (
                                <span
                                    key={index}
                                    className='badge badge-info badge-xs'
                                >
                                    {item}
                                </span>
                            )
                            break

                        case 'Fri':
                            return (
                                <span
                                    key={index}
                                    className='badge badge-success badge-xs'
                                >
                                    {item}
                                </span>
                            )
                            break
                        default:
                            break
                    }
                })}
            </td>
            <td>
                {obj.grades_taught.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className='badge badge-warning badge-xs'
                        >
                            {item}
                        </span>
                    )
                })}
            </td>
            <td>
                <div className='btn btn-ghost btn-xs'>Details</div>
            </td>
        </tr>
    )
})

const TeacherTable = () => {
    return (
        <div className='overflow-x-auto w-full'>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type='checkbox' className='checkbox' />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Day of Week</th>
                        <th>Grades Taught</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{datum}</tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Day of Week</th>
                        <th>Grades Taught</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TeacherTable
