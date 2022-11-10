export const links = [
    { name: "Overview", path: "", active: false, icon: "https://res.cloudinary.com/dcpfdxsly/image/upload/v1667685808/mamo-app/overview.png" },
    { name: "Payments links", path: "", active: false, icon: "https://res.cloudinary.com/dcpfdxsly/image/upload/v1667757365/mamo-app/Vector.png" },
    { name: "Invoices", path: "", active: false, icon: "https://res.cloudinary.com/dcpfdxsly/image/upload/v1667685809/mamo-app/invoice.png" },
    { name: "Payments", path: "", active: true, icon: "https://res.cloudinary.com/dcpfdxsly/image/upload/v1667685809/mamo-app/payment.png" },
    { name: "Settlements", path: "", active: false, icon: "https://res.cloudinary.com/dcpfdxsly/image/upload/v1667685809/mamo-app/settlement.png" },
    {
        name: "Account Settings",
        path: "",
        active: false,
        icon: "https://res.cloudinary.com/dcpfdxsly/image/upload/v1667685808/mamo-app/account.png",
    },
];

export enum Status {
    outstanding = 'Outstanding',
    paid = 'Paid',
    cancelled = 'Cancelled',

}
export type Invoices = {
    id: string;
    customer: string;
    amount: number;
    status: Status
    createdAt: string
}
const invoices: Invoices[] = [
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.outstanding,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.outstanding,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.outstanding,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.outstanding,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.outstanding,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.cancelled,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.paid,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.paid,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.paid,
        createdAt: '25/04/2021'
    },
    {
        id: '4574232-0001',
        customer: 'Asma Alyamani',
        amount: 150.00,
        status: Status.paid,
        createdAt: '25/04/2021'
    },

]

export default invoices;

