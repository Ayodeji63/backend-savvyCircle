
export const contractAddress = "0xf395e8a32a517568332a893cbce459b0346d1322";
export const abi = [
    {
        type: "constructor",
        inputs: [{ name: "_token", type: "address", internalType: "address" }],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "LOAN_DURATION",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "LOAN_INTEREST_RATE",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "LOAN_PRECISION",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "LOCK_PERIOD",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "MAX_CYCLES",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "checkUpkeep",
        inputs: [{ name: "", type: "bytes", internalType: "bytes" }],
        outputs: [
            { name: "upkeepNeeded", type: "bool", internalType: "bool" },
            { name: "performData", type: "bytes", internalType: "bytes" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "createGroup",
        inputs: [
            { name: "_name", type: "string", internalType: "string" },
            { name: "user", type: "address", internalType: "address" },
            { name: "_groupId", type: "int256", internalType: "int256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "deposit",
        inputs: [{ name: "_groupId", type: "int256", internalType: "int256" }],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "getAmountRepaid",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "user", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getContractTokenBalance",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGroupIsFirstHalf",
        inputs: [{ name: "_groupId", type: "int256", internalType: "int256" }],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGroupIsSecondHalf",
        inputs: [{ name: "_groupId", type: "int256", internalType: "int256" }],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGroupMemebers",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "index", type: "uint256", internalType: "uint256" },
        ],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGroupMonthlySavings",
        inputs: [{ name: "_groupId", type: "int256", internalType: "int256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGroupTotalLoanGiveOut",
        inputs: [{ name: "_groupId", type: "int256", internalType: "int256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGroupTotalRepaidLoan",
        inputs: [{ name: "_groupId", type: "int256", internalType: "int256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGroupTotalSavings",
        inputs: [{ name: "_groupId", type: "int256", internalType: "int256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getHasReceivedLoan",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "user", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "bool", internalType: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getMemeberSavings",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "user", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getOutStandingLoan",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "user", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTestTokens",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getUserDebt",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "user", type: "address", internalType: "address" },
        ],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getUserGroups",
        inputs: [{ name: "user", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "int256[]", internalType: "int256[]" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "groupCount",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "groupIds",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "int256", internalType: "int256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "groups",
        inputs: [{ name: "", type: "int256", internalType: "int256" }],
        outputs: [
            { name: "monthlyContribution", type: "uint256", internalType: "uint256" },
            { name: "totalSavings", type: "uint256", internalType: "uint256" },
            { name: "loanGivenOut", type: "uint256", internalType: "uint256" },
            { name: "repaidLoan", type: "uint256", internalType: "uint256" },
            { name: "creationTime", type: "uint256", internalType: "uint256" },
            { name: "firstHalfLoanDistributed", type: "bool", internalType: "bool" },
            { name: "secondHalfLoanDistributed", type: "bool", internalType: "bool" },
            { name: "loanRepaid", type: "bool", internalType: "bool" },
            {
                name: "firstBatchRepaidCount",
                type: "uint256",
                internalType: "uint256",
            },
            { name: "name", type: "string", internalType: "string" },
            { name: "admin", type: "address", internalType: "address" },
            { name: "memberCount", type: "uint256", internalType: "uint256" },
            {
                name: "loanRepaymentDuration",
                type: "uint256",
                internalType: "uint256",
            },
            { name: "loanCycleCount", type: "uint256", internalType: "uint256" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "joinGroup",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "user", type: "address", internalType: "address" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "loans",
        inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "int256", internalType: "int256" },
        ],
        outputs: [
            { name: "totalAmount", type: "uint256", internalType: "uint256" },
            { name: "amountRepaid", type: "uint256", internalType: "uint256" },
            { name: "monthlyPayment", type: "uint256", internalType: "uint256" },
            { name: "nextPaymentDue", type: "uint256", internalType: "uint256" },
            { name: "debt", type: "uint256", internalType: "uint256" },
            { name: "fullyRepaid", type: "bool", internalType: "bool" },
            { name: "isFirstBatch", type: "bool", internalType: "bool" },
            { name: "isSecondBatch", type: "bool", internalType: "bool" },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "performUpkeep",
        inputs: [{ name: "performData", type: "bytes", internalType: "bytes" }],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "repayLoan",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "_amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setMonthlyContribution",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "_amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setRepaymentDuration",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "_time", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "token",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "contract IERC20" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "usersTotalSavings",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "withdrawFromGroup",
        inputs: [
            { name: "_groupId", type: "int256", internalType: "int256" },
            { name: "_amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "DepositMade",
        inputs: [
            {
                name: "groupId",
                type: "int256",
                indexed: true,
                internalType: "int256",
            },
            {
                name: "member",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "GroupCreated",
        inputs: [
            {
                name: "groupId",
                type: "int256",
                indexed: true,
                internalType: "int256",
            },
            { name: "name", type: "string", indexed: false, internalType: "string" },
            {
                name: "admin",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LoanDistributed",
        inputs: [
            {
                name: "groupId",
                type: "int256",
                indexed: true,
                internalType: "int256",
            },
            {
                name: "borrower",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "isFirstBatch",
                type: "bool",
                indexed: false,
                internalType: "bool",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LoanRepayment",
        inputs: [
            {
                name: "groupId",
                type: "int256",
                indexed: true,
                internalType: "int256",
            },
            {
                name: "borrower",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "MemberJoined",
        inputs: [
            {
                name: "groupId",
                type: "int256",
                indexed: true,
                internalType: "int256",
            },
            {
                name: "member",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "SavingsDeposited",
        inputs: [
            {
                name: "groupId",
                type: "int256",
                indexed: true,
                internalType: "int256",
            },
            {
                name: "member",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "SavingsWithdraw",
        inputs: [
            {
                name: "groupId",
                type: "int256",
                indexed: true,
                internalType: "int256",
            },
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "AddressEmptyCode",
        inputs: [{ name: "target", type: "address", internalType: "address" }],
    },
    {
        type: "error",
        name: "AddressInsufficientBalance",
        inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
    { type: "error", name: "FailedInnerCall", inputs: [] },
    { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
    {
        type: "error",
        name: "SafeERC20FailedOperation",
        inputs: [{ name: "token", type: "address", internalType: "address" }],
    },
];
