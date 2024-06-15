declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;

}

declare interface HeaderProps {
    type?: "title" | "greeting";
    title: string;
    user?: string;
    subtext: string;
}

declare interface TotalBalanceProps {
    accounts: Account[]; 
    totalBankAccounts: number;
    totalCurrentBalance: number;
}

declare interface DoughnutChartProps {
    accounts: Account[];
}

declare interface SidebarProps {
    user: User;
}