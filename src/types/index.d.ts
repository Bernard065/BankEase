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