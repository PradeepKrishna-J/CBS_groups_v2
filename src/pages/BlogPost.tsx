import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, BookOpen, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
}

interface BlogData {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  sections: Section[];
  content: React.ReactNode;
}

// ─── Blog 1 ──────────────────────────────────────────────────────────────────
const blog1Content = (
  <>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>India's Micro, Small, and Medium Enterprises (MSME) sector is the backbone of the national economy. With over 63 million MSMEs contributing nearly 30% of India's GDP and employing more than 110 million people, this segment is a true engine of growth. Yet, one of the most persistent challenges faced by MSME owners is access to adequate, timely, and affordable financing.</p>
      <p>Whether you are a first-generation entrepreneur running a small manufacturing unit in Coimbatore, a retail trader in Surat, or a technology startup in Bengaluru, understanding MSME loans—how they work, what they cover, and how to access them—is critical to your business's survival and growth. This comprehensive guide walks you through every dimension of MSME lending, from definitions and eligibility to application strategies and government-backed schemes.</p>
      <p>The lending landscape for MSMEs has transformed dramatically over the past decade. Digital lending platforms, policy reforms under Atmanirbhar Bharat, and initiatives like the Emergency Credit Line Guarantee Scheme (ECLGS) have collectively broadened access. Yet, complexity remains. Navigating interest rates, collateral requirements, and documentation demands can be daunting. This guide exists to demystify the process entirely.</p>
    </section>

    <section id="what-are-msme-loans">
      <h2>What Are MSME Loans?</h2>
      <p>MSME loans are financial products specifically designed to meet the capital needs of micro, small, and medium enterprises. These loans can be used for a wide range of purposes including purchasing machinery, building inventory, expanding operations, meeting day-to-day working capital needs, or even refinancing existing high-cost debt.</p>
      <p>The MSME Development Act of 2006 formally defined the sector, and the revised MSME classification under the Atmanirbhar Bharat package (2020) expanded the criteria to include turnover-based definitions alongside investment-based ones:</p>
      <ul>
        <li><strong>Micro Enterprise:</strong> Investment up to ₹1 crore and turnover up to ₹5 crore.</li>
        <li><strong>Small Enterprise:</strong> Investment up to ₹10 crore and turnover up to ₹50 crore.</li>
        <li><strong>Medium Enterprise:</strong> Investment up to ₹50 crore and turnover up to ₹250 crore.</li>
      </ul>
      <p>A registered MSME enjoys preferential access to a host of credit schemes offered by public sector banks, private banks, Non-Banking Financial Companies (NBFCs), and fintech lenders. MSME registration through the Udyam portal is a prerequisite for most government-sponsored credit programs and subsidy benefits.</p>
      <p>Lenders evaluate MSME borrowers on the basis of creditworthiness, business performance, market potential, and repayment capacity. Unlike corporate lending, MSME loans sometimes rely heavily on the personal credit history of the promoter, especially for smaller ticket sizes where formal business financial records may be limited.</p>
    </section>

    <section id="types-of-msme-loans">
      <h2>Types of MSME Loans</h2>
      <p>MSMEs have diverse financing needs. Understanding the various loan types helps business owners select the most appropriate product.</p>
      <h3>Term Loans</h3>
      <p>Term loans are the most straightforward form of MSME financing. A lump sum is disbursed upfront, and the borrower repays in equated monthly instalments (EMIs) over a fixed tenure—typically one to seven years. Short-term loans have tenures under three years and are best suited for working capital or immediate expenses. Long-term loans extend beyond five years and are ideal for capital expenditure—buying plant, machinery, or commercial property.</p>
      <h3>Working Capital Loans</h3>
      <p>These are revolving credit facilities structured around the business's operating cycle. Cash Credit (CC) accounts and Overdraft (OD) facilities fall in this category. The borrower can withdraw funds up to a sanctioned limit and pay interest only on the amount utilised. This flexibility makes working capital loans particularly useful for businesses with fluctuating revenue cycles such as retail, hospitality, and seasonal manufacturing.</p>
      <h3>Equipment & Machinery Loans</h3>
      <p>Manufacturers and service providers constantly require investment in modern equipment to remain competitive. Equipment financing products allow businesses to purchase machinery by using the asset itself as collateral. Loan-to-value (LTV) ratios typically range from 70%–85% of the asset value. Interest rates are often marginally lower because of the secured nature of the facility.</p>
      <h3>Invoice Discounting & Bill Discounting</h3>
      <p>MSMEs supplying goods or services to large corporates or government entities often face long payment cycles of 60 to 90 days. Invoice discounting allows the business to unlock the value trapped in unpaid invoices—typically 80%–90% of the invoice value—by assigning them to a financier. This dramatically improves cash flow without taking on traditional debt.</p>
      <h3>Trade Finance</h3>
      <p>For MSMEs engaged in import-export activities, trade finance products like Letters of Credit (LC), Bank Guarantees (BG), and export packing credit are essential. These instruments reduce counterparty risk and enable businesses to execute larger orders with confidence.</p>
      <h3>Microfinance & Mudra Loans</h3>
      <p>For the smallest micro enterprises, the Pradhan Mantri Mudra Yojana (PMMY) offers three tiers of unsecured lending: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh). MUDRA loans are channelled through banks, MFIs, and NBFCs and require minimal documentation.</p>
    </section>

    <section id="eligibility-criteria">
      <h2>Eligibility Criteria</h2>
      <p>While eligibility differs by lender and product, the following are the most common parameters evaluated when an MSME applies for a loan:</p>
      <h3>Business Vintage</h3>
      <p>Most formal lenders require a minimum business vintage of two to three years. This demonstrates operational stability. New businesses may qualify under special startup or first-generation entrepreneur schemes offered by SIDBI or state governments, but these often carry higher scrutiny.</p>
      <h3>Annual Turnover</h3>
      <p>Lenders set minimum annual turnover thresholds that vary by product—typically ₹20 lakh–₹1 crore for working capital facilities and higher for larger term loans. Turnover figures should be substantiated by ITR, GST returns, and bank statements.</p>
      <h3>Credit Score</h3>
      <p>Both the CIBIL score of the promoter (ideally 700+) and the credit history of the business entity matter significantly. Poor repayment history, settlement of loans, or defaults can severely impair eligibility. Regularly reviewing and maintaining a healthy credit score is imperative.</p>
      <h3>Profitability & Cash Flow</h3>
      <p>Lenders conduct a detailed analysis of income statements, balance sheets, and cash flow statements to assess debt-service coverage ratios (DSCR). A DSCR of 1.25 or higher signals that the business generates sufficient cash to service debt obligations comfortably.</p>
      <h3>Collateral</h3>
      <p>Collateral requirements depend on the loan size and type. Smaller loans under government schemes such as CGTMSE may be collateral-free. Larger facilities typically require mortgage of property, pledge of receivables, or hypothecation of assets. The government's Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) provides coverage for collateral-free loans up to ₹5 crore.</p>
    </section>

    <section id="documents-required">
      <h2>Documents Required</h2>
      <p>Preparing a thorough document package speeds up the loan application process and reduces the likelihood of rejection. Standard documentation includes:</p>
      <ul>
        <li><strong>KYC Documents:</strong> Aadhaar, PAN card, passport-size photographs of promoters/partners/directors.</li>
        <li><strong>Business Proof:</strong> Certificate of incorporation, partnership deed, GST registration certificate, Udyam registration certificate.</li>
        <li><strong>Financial Statements:</strong> Audited balance sheets and profit-and-loss accounts for the last two to three years, along with CA-certified provisional financials for the current year.</li>
        <li><strong>Tax Returns:</strong> Individual and business ITR for the last two to three years.</li>
        <li><strong>Bank Statements:</strong> Six to twelve months of primary business account statements.</li>
        <li><strong>GST Returns:</strong> Last twelve months of GSTR-1 and GSTR-3B filings.</li>
        <li><strong>Collateral Documents:</strong> Property title deeds, valuation report, and encumbrance certificate (if applicable).</li>
        <li><strong>Business Plan / Project Report:</strong> Required for new projects, capex expansions, or first-time borrowers.</li>
      </ul>
      <p>NBFCs and digital lenders often have a leaner documentation requirement and can process loans faster—sometimes within 48 to 72 hours—by leveraging GST data, account aggregator frameworks, and bureau scores.</p>
    </section>

    <section id="application-process">
      <h2>Application Process</h2>
      <p>The MSME loan application process has become significantly more streamlined in recent years, especially with digital-first NBFCs. Here is a step-by-step overview:</p>
      <ol>
        <li><strong>Assess Your Need:</strong> Determine the exact amount, purpose, and desired tenure. Over-borrowing inflates interest costs while under-borrowing can leave operations underfunded.</li>
        <li><strong>Research Lenders:</strong> Compare banks, NBFCs, and fintech lenders based on interest rates, processing fees, prepayment charges, and turnaround times. CBS Groups specialises in identifying the best-fit lender for your specific profile.</li>
        <li><strong>Prepare Documents:</strong> Compile the documentation checklist well in advance to avoid delays during underwriting.</li>
        <li><strong>Submit Application:</strong> Applications can be submitted at bank branches, online portals, or through a DSA/channel partner like CBS Groups who can facilitate a smoother process.</li>
        <li><strong>Credit Appraisal:</strong> The lender's credit team will evaluate your financial health, conduct site visits for larger loans, and prepare a credit note for sanction.</li>
        <li><strong>Sanction Letter:</strong> Upon approval, you receive a detailed sanction letter specifying loan amount, interest rate, repayment schedule, and conditions.</li>
        <li><strong>Documentation & Disbursement:</strong> After signing the loan agreement and fulfilling any pre-disbursement conditions (such as insurance or collateral registration), the funds are transferred to your account.</li>
      </ol>
    </section>

    <section id="interest-rates">
      <h2>Interest Rates & Repayment</h2>
      <p>MSME loan interest rates in India currently range from approximately 8.5% to 24% per annum depending on the lender type, loan size, borrower profile, and security offered. Public sector banks tend to offer the most competitive rates (8.5%–14%), while NBFCs and digital lenders charge higher rates (14%–24%) in exchange for speed, flexibility, and lower documentation requirements.</p>
      <p>Rates are linked to the lender's benchmark—public sector banks use the Marginal Cost of Funds-based Lending Rate (MCLR) or the Repo Linked Lending Rate (RLLR), while NBFCs use internal benchmarks. A spread of 1.5%–4% over the benchmark is common for MSMEs.</p>
      <p>Processing fees typically range from 0.5% to 2% of the loan amount. Prepayment penalties, if any, are usually 2%–4% of the outstanding principal and are often waived after a certain lock-in period. Always negotiate on these parameters—they can significantly impact the total cost of borrowing.</p>
    </section>

    <section id="government-schemes">
      <h2>Government Schemes for MSMEs</h2>
      <p>India has an impressive array of government-backed credit programs designed to ease MSME financing:</p>
      <ul>
        <li><strong>CGTMSE:</strong> Collateral-free loans up to ₹5 crore with credit guarantee cover of 75%–85%.</li>
        <li><strong>MUDRA Yojana:</strong> Unsecured loans up to ₹10 lakh for micro enterprises at competitive rates.</li>
        <li><strong>SIDBI Schemes:</strong> SIDBI offers re-finance to banks and direct lending to MSMEs, alongside capacity-building programs.</li>
        <li><strong>Stand-Up India:</strong> Facilitates loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs.</li>
        <li><strong>ECLGS (Emergency Credit Line Guarantee Scheme):</strong> Introduced during COVID-19, this scheme provided guaranteed credit up to 20% of outstanding credit with no fresh collateral.</li>
        <li><strong>State Government Schemes:</strong> Many state governments offer interest subvention schemes, capital subsidies, and special credit programs for MSMEs in their jurisdictions.</li>
      </ul>
    </section>

    <section id="common-mistakes">
      <h2>Common Mistakes to Avoid</h2>
      <p>Many MSME loan applications are rejected or delayed due to avoidable errors. Here are the most common pitfalls:</p>
      <ul>
        <li><strong>Inaccurate Financial Records:</strong> Mismatches between bank statements, ITRs, and GST returns raise red flags during underwriting.</li>
        <li><strong>Choosing the Wrong Loan Type:</strong> Using a term loan for working capital creates EMI pressure; using a CC facility for capex is structurally unsound.</li>
        <li><strong>Ignoring the Cost of Credit:</strong> Focusing only on interest rate while ignoring processing fees, insurance, and prepayment charges increases the effective cost significantly.</li>
        <li><strong>Over-Leveraging:</strong> Taking on more debt than the business can service leads to NPA classification, damaging the credit score and future borrowing capacity.</li>
        <li><strong>Not Leveraging a Loan Advisor:</strong> Experienced loan advisors like CBS Groups navigate complex eligibility criteria, lender preferences, and documentation requirements, dramatically improving approval chances.</li>
      </ul>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>MSME loans are powerful instruments for business growth when used strategically and responsibly. The key is to understand your financing need precisely, prepare documentation meticulously, and select the loan product that aligns with your cash flow profile and repayment capacity. Government schemes have significantly lowered barriers, and the digital lending ecosystem has made capital more accessible than ever.</p>
      <p>At CBS Groups, we have facilitated hundreds of crores in MSME financing across Tamil Nadu and beyond. Our team of seasoned financial advisors works closely with business owners to structure the right credit solution, negotiate favourable terms, and ensure smooth disbursement. Whether you are seeking your first loan or looking to optimise an existing credit portfolio, we are here to help.</p>
    </section>

    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-2">
        <BlogFAQ q="What is the minimum CIBIL score required for an MSME loan?" a="Most lenders prefer a promoter CIBIL score of 700 or above. Scores between 650–699 may still be considered by NBFCs or under CGTMSE-backed collateral-free schemes, albeit at slightly higher interest rates." />
        <BlogFAQ q="Can I get an MSME loan without collateral?" a="Yes. Under the CGTMSE scheme, collateral-free loans up to ₹5 crore are available. The government-backed credit guarantee compensates the lender in case of default, removing the collateral barrier for eligible MSMEs." />
        <BlogFAQ q="How long does it take to get an MSME loan disbursed?" a="Public sector banks typically take 2–4 weeks. Private banks and NBFCs can disburse within 5–10 working days. Digital NBFC platforms can disburse in 48–72 hours for smaller ticket sizes using GST-based underwriting." />
        <BlogFAQ q="Is Udyam registration mandatory for MSME loans?" a="Yes, for most government-backed schemes (CGTMSE, MUDRA, Stand-Up India), Udyam registration is compulsory. It is also increasingly required by banks as part of standard documentation. Registration is free and instant at udyamregistration.gov.in." />
        <BlogFAQ q="What is the maximum loan amount available under MSME schemes?" a="Under CGTMSE, the maximum collateral-free guarantee is ₹5 crore. Under MUDRA, loans go up to ₹10 lakh. For larger requirements, secured business loans through banks and NBFCs can go up to ₹50 crore or more depending on the business profile." />
        <BlogFAQ q="Can a new business (less than 2 years old) get an MSME loan?" a="It is more challenging but not impossible. Options include MUDRA Shishu/Kishore loans, SIDBI startup schemes, CGTMSE for new units, and state government startup credit programmes. A strong business plan and promoter credit history significantly improve prospects." />
      </div>
    </section>
  </>
);

// ─── Blog 2 ──────────────────────────────────────────────────────────────────
const blog2Content = (
  <>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>Working capital is the lifeblood of every business. It is the fuel that keeps daily operations running—paying suppliers, managing inventory, meeting payroll, and fulfilling customer orders. Despite its critical importance, working capital management remains one of the most misunderstood and poorly executed aspects of business finance for MSMEs and mid-sized enterprises alike.</p>
      <p>Inadequate working capital is cited as a leading cause of business failure, not just in India but globally. Ironically, businesses can be profitable on paper yet collapse due to poor liquidity management. The inability to convert sales into cash quickly enough to meet obligations creates a ticking time bomb. This guide explores the science and art of working capital management, offering practical strategies that business owners can implement immediately.</p>
      <p>CBS Groups has worked with hundreds of businesses across sectors—manufacturing, trading, services, and hospitality—and the single most impactful financial intervention in almost every case has been improving the working capital cycle. The companies that master this discipline grow faster, face less financial stress, and command better credit terms from both lenders and suppliers.</p>
    </section>

    <section id="understanding-working-capital">
      <h2>Understanding the Working Capital Cycle</h2>
      <p>Working capital is defined as Current Assets minus Current Liabilities. But this static definition misses the dynamic, cyclical nature of business operations. The working capital cycle—also called the cash conversion cycle (CCC)—measures the time it takes for a rupee invested in raw materials to return to the business as cash after a sale.</p>
      <p><strong>Cash Conversion Cycle = Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) − Days Payable Outstanding (DPO)</strong></p>
      <p>A shorter CCC indicates greater efficiency—money is being recycled faster, reducing the need for external financing. A longer CCC means more capital is tied up in operations, creating a financing gap that must be bridged with working capital loans, credit lines, or equity.</p>
      <p>For example, consider a textile manufacturer who purchases cotton (DIO: 45 days), sells fabric to a retailer (DSO: 60 days), and pays the cotton supplier (DPO: 30 days). The CCC = 45 + 60 − 30 = 75 days. Every 75 days, the company needs to finance one full operating cycle. If annual revenue is ₹10 crore, the working capital need is approximately ₹2.05 crore at any point.</p>
    </section>

    <section id="inventory-management">
      <h2>Inventory Management Best Practices</h2>
      <p>For product-based businesses, inventory often represents the single largest component of current assets. Excessive inventory ties up cash, increases storage costs, and risks obsolescence. Insufficient inventory causes stock-outs, lost sales, and customer dissatisfaction. The goal is optimal inventory—enough to meet demand without excess.</p>
      <h3>ABC Analysis</h3>
      <p>Classify inventory into three categories: A-items (high value, low quantity—top 10% by value, bottom 70% by count), B-items (moderate value and quantity), and C-items (low value, high quantity). Apply tighter controls to A-items—frequent ordering, real-time tracking, supplier relationships—while using simpler reorder point systems for C-items.</p>
      <h3>Just-In-Time (JIT) Procurement</h3>
      <p>JIT minimises inventory by ordering materials only when needed. While true JIT requires highly reliable supplier networks and is more suited to larger manufacturers, the principles can be adapted by MSMEs to reduce average inventory holding days by 20%–40%.</p>
      <h3>Safety Stock Optimisation</h3>
      <p>Rather than maintaining blanket safety stock based on intuition, calculate safety stock scientifically using demand variability and lead time variability. This typically reduces safety stock by 30% without increasing stock-out risk.</p>
    </section>

    <section id="receivables-management">
      <h2>Receivables Management</h2>
      <p>Receivables represent money owed by customers for goods or services delivered. Poor receivables management is responsible for more MSME cash flow crises than any other factor. Key strategies include:</p>
      <h3>Credit Policy Formulation</h3>
      <p>Define clear credit terms for different customer segments. Large corporates may demand 60–90 day credit, while smaller retailers should be limited to 30 days or cash-on-delivery. Formally document credit limits and payment terms in sales agreements.</p>
      <h3>Invoice Promptly and Accurately</h3>
      <p>Avoid delays in raising invoices—every day of delay effectively extends your credit period. Ensure invoices are accurate; billing errors are a common reason for payment delays, as customers use disputes as justification to withhold payment.</p>
      <h3>Proactive Collections</h3>
      <p>Don't wait passively for payments to arrive. Implement a structured follow-up cadence: a reminder 7 days before due date, a follow-up call on due date, escalation at 10 days past due, and formal notice at 30 days past due. Automated reminders through accounting software can handle much of this process.</p>
      <h3>Early Payment Discounts</h3>
      <p>Offering a 1%–2% discount for payments within 10 days (2/10 net 30) can dramatically accelerate collections. For many businesses, the cost of this discount is far less than the cost of carrying receivables for an extra 20 days.</p>
      <h3>Invoice Discounting</h3>
      <p>For MSMEs supplying to large, creditworthy counterparties like government entities or listed companies, invoice discounting facilities offered by banks and fintech platforms allow you to receive 80%–90% of invoice value within 24–48 hours of invoice upload, eliminating the 60–90-day wait.</p>
    </section>

    <section id="payables-management">
      <h2>Payables Management</h2>
      <p>Just as receivables represent capital owed to you, payables represent interest-free financing extended by your suppliers. Extending payment terms—without damaging supplier relationships—can significantly reduce working capital requirements.</p>
      <p>Negotiate longer credit terms with key suppliers, especially if you offer them volume certainty or early partial payments during peak production seasons. Building trust and payment reliability over time gives you leverage to extend DPO from 30 days to 45 or 60 days, dramatically improving your CCC.</p>
      <p>However, be careful not to over-extend payables. Late payments damage supplier relationships, result in penalties, and may cause supply disruptions. A sustainable payables strategy balances cost optimisation with supplier goodwill.</p>
    </section>

    <section id="cash-flow-forecasting">
      <h2>Cash Flow Forecasting</h2>
      <p>A 13-week rolling cash flow forecast is one of the most powerful tools available to business owners. Unlike annual budgets, a short-term rolling forecast captures the actual cash position week by week, allowing proactive responses to funding gaps.</p>
      <p>The forecast maps expected receipts (from collections, advance payments, loans) against expected disbursements (supplier payments, payroll, rent, taxes) on a weekly basis. When gaps are identified 4–6 weeks in advance, there is sufficient time to arrange working capital facilities, accelerate collections, or defer non-critical expenditures without emergency scrambling.</p>
      <p>Modern accounting software like Tally, Zoho Books, or QuickBooks can generate basic cash flow projections automatically from accounts receivable and payable ledgers. Dedicated treasury management tools are available for larger enterprises.</p>
    </section>

    <section id="working-capital-financing">
      <h2>Working Capital Financing Options</h2>
      <p>Despite best efforts at internal optimisation, most businesses require some external working capital financing to bridge seasonal or structural gaps. Options include:</p>
      <ul>
        <li><strong>Cash Credit (CC) Facility:</strong> A revolving credit line secured against stock and receivables. Interest is charged only on the drawn amount. The most common working capital product offered by banks.</li>
        <li><strong>Overdraft (OD) Facility:</strong> Linked to the current account; allows drawing beyond the credit balance up to a sanctioned limit. Useful for short-term cash flow mismatches.</li>
        <li><strong>Bill Discounting / Invoice Financing:</strong> As described earlier, converts receivables into immediate cash at a modest discount.</li>
        <li><strong>Supply Chain Finance:</strong> Allows suppliers to receive early payment against buyer-approved invoices, with the buyer taking the credit risk. Reduces financing costs for the entire supply chain.</li>
        <li><strong>NBFC Working Capital Loans:</strong> Unsecured or minimally secured products from NBFCs with faster turnaround, suitable for businesses with clean GST and bank statement history.</li>
      </ul>
    </section>

    <section id="technology-tools">
      <h2>Technology Tools for Working Capital Optimisation</h2>
      <p>Digital transformation has opened up new avenues for working capital improvement. Enterprise Resource Planning (ERP) systems, even at the SME level (like Zoho One, Odoo, or SAP Business One), provide real-time visibility into inventory levels, outstanding receivables, and upcoming payables—enabling faster, data-driven decisions.</p>
      <p>The Account Aggregator (AA) framework launched by RBI allows lenders to access consented, standardised financial data, making working capital credit assessments faster and more accurate. Businesses with clean digital financial trails gain faster, cheaper access to credit.</p>
      <p>GST compliance is another under-leveraged asset. A clean GST return history with consistent revenue reporting is increasingly used by lenders as a proxy for business health, enabling unsecured working capital loans based purely on GST data.</p>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>Effective working capital management is not a finance department activity—it is a whole-business discipline that requires coordination across sales, procurement, operations, and finance. The best-managed businesses treat working capital as a strategic asset and actively optimise every component of their cash conversion cycle.</p>
      <p>CBS Groups partners with businesses to design working capital strategies, structure the right financing facilities, and connect them with lenders offering the most competitive terms. If your business is experiencing cash flow stress, or if you simply want to optimise your operations for growth, contact our team for a complimentary working capital assessment.</p>
    </section>

    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-2">
        <BlogFAQ q="What is the ideal current ratio for a healthy business?" a="A current ratio (current assets ÷ current liabilities) of 1.5–2.0 is generally considered healthy. Below 1.0 signals liquidity stress. The ideal range varies by industry—capital-intensive sectors typically operate at lower ratios." />
        <BlogFAQ q="How much working capital does my business actually need?" a="Working capital requirement = Cash Conversion Cycle (days) × daily revenue. For a business with a 75-day CCC and ₹10 crore annual revenue, WCR ≈ ₹2.05 crore. Your banker or financial advisor can compute this precisely using your balance sheet." />
        <BlogFAQ q="What is invoice discounting and how is it different from a loan?" a="Invoice discounting is not a loan—it is the sale of your accounts receivable at a slight discount for immediate cash. Unlike a working capital loan, it does not appear as debt on your balance sheet, and repayment happens automatically when the customer pays the invoice." />
        <BlogFAQ q="Can a CC (Cash Credit) account be used for capital expenditure?" a="Technically yes, but it is structurally incorrect. CC facilities are short-term revolving credit designed for working capital. Using CC for capex creates mismatched tenures and EMI pressure. Always use a term loan for capital expenditure." />
        <BlogFAQ q="How can I reduce my debtors' collection period?" a="Key levers include: invoice immediately upon delivery, offer early-payment discounts (1–2%), establish a structured follow-up cadence, use accounting software for automated reminders, and consider invoice discounting for large receivables." />
        <BlogFAQ q="What is supply chain finance and how does it benefit MSMEs?" a="Supply chain finance lets an MSME supplier receive early payment for buyer-approved invoices at lower financing rates—because the buyer's credit rating (not the MSME's) determines the cost. Both parties benefit: supplier gets faster cash; buyer retains extended payment terms." />
      </div>
    </section>
  </>
);

// ─── Blog 3 ──────────────────────────────────────────────────────────────────
const blog3Content = (
  <>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>Business growth rarely happens organically alone. Behind almost every business that has scaled significantly is a story of smart capital allocation—and at the heart of that story is often a well-structured business loan. In India's $3.5 trillion economy, access to business credit has moved from being a luxury to an operational necessity for enterprises of every size and sector.</p>
      <p>Yet many business owners remain hesitant about borrowing, often due to misconceptions about complexity, cost, or risk. This hesitancy can be costly. While debt must always be approached with respect and a clear repayment plan, used strategically, business loans can be transformative. This article explores the five most impactful benefits of business loans that smart entrepreneurs are leveraging in 2024 and beyond.</p>
    </section>

    <section id="benefit-1-growth-capital">
      <h2>Benefit 1: Accelerated Business Growth</h2>
      <p>The most direct benefit of a business loan is the ability to accelerate growth beyond what internal cash flows alone would allow. Organic growth—funded entirely from profits—is inherently slow. A business generating ₹50 lakh in annual profit, reinvesting 50%, can fund ₹25 lakh of expansion per year. A well-structured term loan of ₹1 crore could enable that same business to execute in one year what would otherwise take four.</p>
      <p>This is the fundamental argument for leverage in business. When a company can deploy borrowed capital at a return greater than the cost of that capital, value is created. A manufacturing business borrowing at 12% per annum to acquire machinery that generates a 28% incremental return on investment is creating a spread of 16%. That spread compounds over time, building substantial wealth.</p>
      <p>Growth-oriented loan use cases include geographic expansion (opening new branches or distribution hubs), adding production capacity to fulfil larger orders, acquiring a competitor or complementary business, investing in marketing for customer acquisition at scale, and onboarding a larger workforce to accommodate revenue expansion.</p>
      <h3>The Opportunity Cost of Not Borrowing</h3>
      <p>Business owners sometimes underestimate the opportunity cost of avoiding debt. Consider a ₹75 lakh manufacturing contract that would require ₹40 lakh in advance material procurement. If the business lacks the liquidity and avoids the loan, it forgoes the contract. A competitor who takes the loan wins that business—and that client relationship—potentially permanently. The annual interest on a 12-month loan at 13% would be approximately ₹5.2 lakh. The margin on a ₹75 lakh contract in manufacturing could easily be ₹12–18 lakh. The math strongly favours borrowing.</p>
    </section>

    <section id="benefit-2-equipment-technology">
      <h2>Benefit 2: Access to Better Equipment and Technology</h2>
      <p>Technological obsolescence is a silent killer of competitiveness. In sectors as diverse as textile manufacturing, food processing, IT services, and construction, the businesses that invest in modern equipment and technology consistently outperform those that don't—on quality, speed, cost efficiency, and customer satisfaction.</p>
      <p>Equipment financing, a specialised form of business loan, allows companies to acquire state-of-the-art machinery without depleting operational cash reserves. The asset being acquired serves as collateral, typically enabling financing of 75%–85% of the asset cost at competitive rates.</p>
      <p>Beyond physical equipment, digital technology investments—ERP systems, CRM platforms, e-commerce infrastructure, digital marketing—require upfront capital but generate sustained returns by improving efficiency and market reach. Technology loans or business term loans are increasingly being used to fund these digital transformation initiatives.</p>
      <p>The accounting treatment further advantages equipment financing: depreciation on assets creates a tax shield, reducing the net cost of acquisition. When combined with the Interest expense deduction under Section 36(1)(iii) of the Income Tax Act, borrowed-and-deployed capital often delivers after-tax returns that significantly exceed the interest cost.</p>
    </section>

    <section id="benefit-3-inventory-seasons">
      <h2>Benefit 3: Capitalising on Bulk Purchase and Seasonal Opportunities</h2>
      <p>Many Indian businesses operate in sectors with pronounced seasonality—agriculture, textiles, retail (festive season), hotels, and construction (pre-monsoon build-up). Missing a seasonal demand surge due to inadequate inventory is a very real and very costly problem.</p>
      <p>A seasonal working capital loan—disbursed in advance of the peak season and repaid from the resulting revenues—allows businesses to stock up on inventory at optimal prices, accept and fulfil large advance orders, scale up temporary labour, and invest in marketing to capture peak-season demand.</p>
      <p>Similarly, suppliers often offer significant discounts for bulk purchases—2%–5% savings on large order quantities are common. A business that can access a short-term loan to make a bulk purchase at a 4% discount, repaid within 90–120 days at a 3% interest cost, has created a 1% net saving on the purchase while simultaneously ensuring supply availability. These seemingly small savings compound into significant cost advantages over time.</p>
    </section>

    <section id="benefit-4-credit-building">
      <h2>Benefit 4: Building Credit History and Financial Credibility</h2>
      <p>For young businesses, responsible borrowing and timely repayment is the most reliable way to build institutional credit history. A strong credit profile enables access to larger loans at better rates—essentially unlocking a virtuous cycle of improved credit access.</p>
      <p>CIBIL scores for businesses (the CIBIL Rank, a 1–10 scale with 1 being the best) and for individual promoters (300–900 scale) directly influence the rate at which new credit is offered. A business with a CIBIL Rank of 1–3 and a promoter with a 750+ credit score can access credit at 1%–3% lower interest rates than a comparable business with a weaker profile. On a ₹2 crore loan, that difference amounts to ₹2–6 lakh per year.</p>
      <p>Lenders also look favourably at businesses with a documented history of successful project execution funded by loans. A company that successfully deployed a ₹50 lakh machinery loan three years ago, repaid it cleanly, and grew revenue by 40% is an attractive credit profile for a ₹2 crore funding request today.</p>
    </section>

    <section id="benefit-5-tax-advantages">
      <h2>Benefit 5: Tax Efficiency Through Interest Deductions</h2>
      <p>One often-overlooked benefit of debt financing is its tax efficiency relative to equity financing. Under the Income Tax Act, 1961, interest paid on business loans is a fully deductible expense under Section 36(1)(iii). This means that the real, after-tax cost of borrowing is (Interest Rate × (1 − Tax Rate)).</p>
      <p>For a business in the 30% tax bracket (including surcharge and cess, effective rate approximately 34.94% for companies), a loan at 12% interest has an after-tax cost of approximately 7.8% per annum. Compare this to issuing equity—which dilutes ownership, shares upside, and has no deductibility benefit. For businesses generating consistent profits, debt financing is almost always more tax-efficient than equity dilution.</p>
      <p>The GST angle is equally important: businesses that use loans to import capital goods can claim input tax credit on GST paid, further reducing the effective cost of acquisition.</p>
    </section>

    <section id="responsible-borrowing">
      <h2>Responsible Borrowing: Key Principles</h2>
      <p>While the benefits of business loans are compelling, they are maximised only when borrowing is approached with discipline and purpose. The core principles of responsible MSME borrowing are:</p>
      <ul>
        <li><strong>Borrow for productive purposes only:</strong> Capital that generates returns in excess of its cost creates value; capital used for consumption or speculation destroys it.</li>
        <li><strong>Right-size the loan:</strong> Borrow exactly what you need, with a small buffer for contingencies. Excess debt increases EMI burden unnecessarily.</li>
        <li><strong>Maintain a repayment reserve:</strong> Always maintain 2–3 months of EMI equivalents in liquid savings as a buffer against business downturns.</li>
        <li><strong>Monitor financial ratios:</strong> Track DSCR, current ratio, and debt-to-equity ratio regularly. Deteriorating ratios are early warning signs of financial stress.</li>
        <li><strong>Seek expert advice:</strong> Working with experienced loan advisors like CBS Groups ensures you access the right product, at the right cost, from the right lender.</li>
      </ul>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>Business loans, when structured correctly and deployed purposefully, are among the most powerful financial tools available to Indian entrepreneurs. They accelerate growth, enable technology upgrades, smooth out seasonal volatility, build credit credibility, and reduce tax burden—all simultaneously. The businesses that harness these benefits with discipline and strategy consistently outperform those that rely on slow, organic capital accumulation.</p>
      <p>CBS Groups is committed to helping businesses unlock the full potential of smart borrowing. Our advisors bring deep domain expertise, strong lender relationships, and a track record of structuring winning loan proposals. Reach out today to explore how the right financing can become your business's greatest competitive advantage.</p>
    </section>

    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-2">
        <BlogFAQ q="How do I know if my business is ready to take a loan?" a="Key indicators of loan-readiness include 2+ years of profitable operations, consistent revenue growth, DSCR above 1.25×, clean credit history, and a specific measurable use of funds. If you can clearly articulate what the loan will fund and how the resulting revenue will repay it, you're ready." />
        <BlogFAQ q="Is it better to take a loan or use personal savings for business expansion?" a="For most business owners, a combination is optimal. Using personal savings eliminates interest costs but depletes your emergency buffer. Loans preserve personal liquidity while enabling faster expansion. The after-tax cost of debt (typically 8%–15%) is often lower than the opportunity cost of locking up personal capital." />
        <BlogFAQ q="What happens if I can't repay a business loan?" a="Non-repayment triggers penalties, credit score damage, and potential NPA classification. However, if you're facing genuine difficulty, proactively speak with your lender about restructuring options—most lenders prefer restructuring to recovery litigation. CBS Groups can assist in loan restructuring conversations." />
        <BlogFAQ q="Can I prepay a business loan?" a="Yes. Prepayment charges (typically 2%–4% of outstanding principal) apply during a lock-in period, after which prepayment is usually free or at minimal cost. Always negotiate the prepayment clause during the loan application—it can save significant money." />
        <BlogFAQ q="How long does a business loan approval take?" a="Public sector banks: 2–4 weeks. Private banks: 1–2 weeks. NBFCs: 3–7 working days. Digital lending platforms: 24–72 hours for smaller loans with clean digital financial trails. Having complete documentation ready is the single biggest accelerator." />
        <BlogFAQ q="What is the difference between a term loan and an overdraft for businesses?" a="A term loan provides a lump sum repaid in EMIs over a fixed tenure—ideal for capex. An overdraft is a revolving limit linked to your current account allowing flexible drawdowns, with interest only on the drawn amount—ideal for managing short-term cash flow gaps." />
      </div>
    </section>
  </>
);

// ─── Blog 4 ──────────────────────────────────────────────────────────────────
const blog4Content = (
  <>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>For millions of small business owners in India, the demand for collateral has historically been the single biggest barrier to institutional credit. Banks and traditional lenders require security—property, fixed deposits, gold—before extending loans. For a first-generation entrepreneur who has no ancestral property or accumulated assets, this requirement creates a crushing Catch-22: you need the loan to grow, but you need assets to get the loan.</p>
      <p>The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)—a joint initiative of the Ministry of Micro, Small and Medium Enterprises and the Small Industries Development Bank of India (SIDBI)—was created precisely to break this deadlock. Launched in 2000, the CGTMSE scheme enables banks and lending institutions to extend collateral-free loans to MSMEs by providing the lender with a government-backed credit guarantee.</p>
      <p>Over the past two decades, CGTMSE has catalysed over ₹3 lakh crore in credit to more than 70 lakh MSME accounts—a testament to its scale and impact. Yet, many eligible businesses remain unaware of or intimidated by the scheme. This guide provides a complete, practical overview of CGTMSE financing.</p>
    </section>

    <section id="what-is-cgtmse">
      <h2>What is the CGTMSE Scheme?</h2>
      <p>CGTMSE is a credit guarantee scheme, not a direct lending program. It functions as a "guarantor" for the lender. When an MSME borrows from a CGTMSE member institution without providing collateral, the Trust guarantees a portion of the loan—typically 75%–85% of the outstanding loan amount—in the event of default. This guarantee dramatically reduces the lender's risk, making them willing to extend collateral-free credit.</p>
      <h3>Key Features</h3>
      <ul>
        <li><strong>Loan Limit:</strong> Guarantees available for loans up to ₹5 crore for eligible MSMEs (enhanced from the original ₹2 crore in 2023).</li>
        <li><strong>Coverage:</strong> 85% for loans up to ₹5 lakh (micro enterprises), 75% for loans above ₹5 lakh and up to ₹5 crore for general category, and 80% for women-owned enterprises and enterprises in the North-East.</li>
        <li><strong>Eligible Institutions:</strong> Over 130 member lending institutions including public sector banks, private sector banks, Regional Rural Banks (RRBs), SFBs (Small Finance Banks), and select NBFCs.</li>
        <li><strong>Eligible Borrowers:</strong> New and existing MSMEs registered under Udyam in the manufacturing or services sector.</li>
        <li><strong>Collateral-Free:</strong> No third-party guarantees or collateral security required.</li>
      </ul>
    </section>

    <section id="eligible-businesses">
      <h2>Which Businesses are Eligible?</h2>
      <p>The CGTMSE scheme covers a wide range of businesses. The key eligibility conditions are:</p>
      <ul>
        <li>The enterprise must be classified as a Micro or Small Enterprise under the MSMED Act (Udyam registration mandatory).</li>
        <li>The loan must be for business purposes—working capital, term loan, or a combination.</li>
        <li>The business should not be in an excluded category. Excluded sectors include retail trade (except specific categories), educational institutions, self-help groups (SHGs) under certain conditions, and training institutions.</li>
        <li>The borrower should not have received benefit under any other credit guarantee scheme for the same facility.</li>
        <li>The creditworthiness and repayment capacity of the borrower must be satisfactory as assessed by the lending institution.</li>
      </ul>
      <p>Women-owned enterprises, SC/ST-owned enterprises, and businesses in the North-Eastern states receive enhanced guarantee coverage, making CGTMSE even more beneficial for underrepresented segments of the MSME ecosystem.</p>
    </section>

    <section id="application-process">
      <h2>How to Apply for a CGTMSE Loan</h2>
      <p>The CGTMSE application process is managed by the lending institution—the borrower does not directly apply to CGTMSE. Here is the step-by-step process:</p>
      <ol>
        <li><strong>Udyam Registration:</strong> Ensure your business is registered on the Udyam portal (udyamregistration.gov.in). The Udyam Registration Number (URN) is mandatory.</li>
        <li><strong>Approach a Member Institution:</strong> Visit a CGTMSE member bank or NBFC and express your intent to apply for a collateral-free loan under the CGTMSE scheme.</li>
        <li><strong>Submit Loan Application:</strong> Provide all required documentation—KYC, financial statements, business plan, and bank statements.</li>
        <li><strong>Credit Appraisal:</strong> The lender evaluates your credit profile and business viability. CGTMSE does not assess individual borrowers; the lending institution does.</li>
        <li><strong>Loan Sanction:</strong> If the lender approves the loan, they register it with CGTMSE and pay the Annual Guarantee Fee (AGF) on your behalf (though this is usually recovered from the borrower).</li>
        <li><strong>Disbursement:</strong> Funds are disbursed to your business account. There is no separate step with CGTMSE—the guarantee operates in the background.</li>
      </ol>
    </section>

    <section id="costand-fees">
      <h2>Costs and Fees</h2>
      <p>CGTMSE is not free—it involves an Annual Guarantee Fee (AGF) that the borrower typically bears. The AGF varies based on the loan amount and category:</p>
      <ul>
        <li>For loans up to ₹10 lakh: 0.37% per annum of the guaranteed amount (effective April 2023).</li>
        <li>For loans above ₹10 lakh and up to ₹1 crore: 0.55% per annum.</li>
        <li>For loans above ₹1 crore and up to ₹2 crore: 0.60% per annum.</li>
        <li>For loans above ₹2 crore and up to ₹5 crore: 1.20% per annum.</li>
        <li>Reduced rates apply for women-owned enterprises and North-East region businesses.</li>
      </ul>
      <p>While the AGF adds to the overall cost of borrowing, for businesses without collateral, this is a small price to pay for access to institutional credit that would otherwise be unavailable. The alternative—pledge lending from informal sources at 24%–36% annual interest—is far more expensive.</p>
    </section>

    <section id="practical-tips">
      <h2>Practical Tips for a Successful CGTMSE Application</h2>
      <ul>
        <li><strong>Maintain a clean credit score:</strong> Even though no collateral is required, lenders scrutinise credit scores closely for collateral-free loans. A score of 700+ significantly improves approval prospects.</li>
        <li><strong>Present a credible business plan:</strong> For new or young businesses, a detailed, well-researched business plan that demonstrates revenue potential and repayment capacity is essential.</li>
        <li><strong>Ensure financial record consistency:</strong> Ensure GST returns, bank statements, and income tax returns reflect consistent and coherent business activity.</li>
        <li><strong>Work with an experienced loan advisor:</strong> CBS Groups has extensive experience structuring CGTMSE loan applications. We identify the right lender within the 130+ member institutions based on your business profile, maximising approval probability.</li>
        <li><strong>Apply for the right quantum:</strong> Don't over-borrow. Lenders under CGTMSE are more cautious about loan sizing for unsecured facilities. A reasonable, well-justified loan request has a much higher sanction rate.</li>
      </ul>
    </section>

    <section id="success-stories">
      <h2>Impact of CGTMSE: Real-World Stories</h2>
      <p>The transformative power of CGTMSE is best illustrated through real-world examples. A first-generation entrepreneur from Chennai who runs a precision engineering components unit was denied loans repeatedly because he had no family property to mortgage. Through CGTMSE, he secured a ₹45 lakh term loan, purchased two CNC machining centres, and grew revenue from ₹60 lakh to ₹1.8 crore within three years.</p>
      <p>A woman entrepreneur in Coimbatore running a garment export unit accessed a ₹80 lakh working capital facility under CGTMSE's enhanced coverage for women enterprises. She fulfilled a large export order for a European buyer, building a permanent supply relationship that anchored her business's growth for years to come.</p>
      <p>These stories, repeated across millions of MSME accounts, underscore the extraordinary social and economic impact of removing collateral as a barrier to credit. CGTMSE is not just a financial product—it is an instrument of economic inclusion.</p>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>The CGTMSE scheme represents the best of policy innovation—targeted, impactful, and scalable. For any MSME owner who has been turned down for a loan due to lack of collateral, it opens a credible, affordable, and dignified pathway to institutional credit. The scheme's enhanced coverage, expanded loan limits, and wide network of participating institutions make it more accessible than ever.</p>
      <p>CBS Groups specialises in CGTMSE-backed loan facilitation. Our team provides end-to-end support—from Udyam registration assistance and document preparation to lender introduction and disbursement follow-up. If you have been searching for collateral-free business financing, contact us today and let us help you access the credit your business deserves.</p>
    </section>

    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-2">
        <BlogFAQ q="Is CGTMSE a loan? Do I apply to CGTMSE directly?" a="No. CGTMSE is a credit guarantee scheme—not a direct lender. You apply for a loan at a participating bank or NBFC. The lender registers the loan under CGTMSE and pays the guarantee fee. You interact only with your lender; CGTMSE backs the guarantee in the background." />
        <BlogFAQ q="What is the maximum loan I can get without collateral under CGTMSE?" a="The maximum credit guarantee cover under CGTMSE was enhanced to ₹5 crore in 2023. The actual loan amount sanctioned depends on your business's repayment capacity, revenue, and the lender's own credit assessment." />
        <BlogFAQ q="Will my property be taken if I default on a CGTMSE loan?" a="Since CGTMSE loans are collateral-free, there is no mortgaged property to be seized on default. However, your CIBIL score and business credit record will be severely damaged, and legal recovery proceedings may still be initiated for any hypothecated assets or personal guarantees." />
        <BlogFAQ q="How long does a CGTMSE loan take to get sanctioned?" a="Typically 2–4 weeks for public sector banks and 1–2 weeks for private banks or NBFCs. The lender's internal credit appraisal determines the timeline; CGTMSE registration happens post-sanction. Submitting complete documentation upfront is the single biggest accelerator." />
        <BlogFAQ q="Can medium enterprises use CGTMSE?" a="No. CGTMSE currently covers only Micro and Small Enterprises as defined under the MSMED Act. Medium enterprises (investment up to ₹50 crore; turnover up to ₹250 crore) are not eligible and must access secured credit or other guarantee mechanisms." />
        <BlogFAQ q="Is the Annual Guarantee Fee (AGF) paid once or every year?" a="The AGF is paid annually for the duration of the loan and is typically recovered from the borrower. For loans up to ₹10 lakh, the fee is as low as 0.37% per annum of the guaranteed amount—a small price for collateral-free institutional credit." />
      </div>
    </section>
  </>
);

// ─── Blog 5 ──────────────────────────────────────────────────────────────────
const blog5Content = (
  <>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>Project finance is one of the most sophisticated and powerful instruments in corporate finance. Unlike conventional loans, which rely primarily on the borrower's existing assets and creditworthiness, project finance evaluates the economic viability of the project itself as the primary basis for lending. The cash flows generated by the project repay the debt; the project's assets serve as collateral. This fundamental structural difference makes project finance uniquely suited to large, capital-intensive ventures where the sponsor either lacks the balance sheet strength to support the debt or wishes to ring-fence the project's financial obligations from the parent entity.</p>
      <p>In India, project finance has been pivotal in funding infrastructure—roads, bridges, airports, ports, power plants, urban development—as well as in manufacturing, real estate, hospitality, and healthcare. As India accelerates its infrastructure build-out under the National Infrastructure Pipeline (NIP) targeting ₹111 lakh crore in infrastructure investment by 2025, project finance will be central to execution.</p>
      <p>For business owners considering large-scale expansion—a new manufacturing facility, a real estate development, a renewable energy plant, or an industrial estate—understanding project finance is essential. This guide explains the mechanics, structure, key stakeholders, and practical considerations of project financing in India.</p>
    </section>

    <section id="how-project-finance-works">
      <h2>How Project Finance Works</h2>
      <p>Project finance structures a loan around a Special Purpose Vehicle (SPV)—a legally separate entity created solely to own and operate the project. The SPV has no prior operating history; its creditworthiness is derived entirely from the project's projected cash flows.</p>
      <p>The key features of this structure are:</p>
      <ul>
        <li><strong>Non-Recourse or Limited Recourse:</strong> Lenders have recourse to the SPV's assets and cash flows, not (or only limitedly) to the sponsor's other assets. This isolates the project risk from the sponsor's balance sheet.</li>
        <li><strong>High Leverage:</strong> Project finance typically employs debt-to-equity ratios of 70:30 to 80:20, sometimes higher for government-backed infrastructure projects. This magnifies returns on equity but also amplifies risk.</li>
        <li><strong>Long Tenures:</strong> Project loans often extend 15–25 years, aligned with the economic life of the asset and its ability to generate cash flows over time.</li>
        <li><strong>Cash Flow Waterfall:</strong> Project revenues flow through a predefined priority cascade: operating costs, debt service (principal + interest), reserve accounts, and finally returns to equity sponsors.</li>
      </ul>
    </section>

    <section id="key-stakeholders">
      <h2>Key Stakeholders in Project Finance</h2>
      <p>A project financing transaction involves multiple parties, each with distinct roles and interests:</p>
      <h3>Sponsors</h3>
      <p>The sponsors are the equity investors—businesses or individuals who conceive, develop, and implement the project. They bear the first-loss risk position, typically contributing 20%–30% of the total project cost as equity.</p>
      <h3>Lenders</h3>
      <p>Senior lenders—banks, development financial institutions (DFIs) like SIDBI, NaBFID, or IFC—provide the bulk of project funding. They have priority claim on assets and cash flows. A consortium of lenders is common for large projects to diversify risk and comply with single-borrower exposure limits.</p>
      <h3>Off-take Counterparties</h3>
      <p>Long-term purchase or usage agreements—Power Purchase Agreements (PPAs), concession agreements, take-or-pay contracts—with creditworthy counterparties (government entities, state utilities, large corporates) underpin the project's revenue certainty and are critical to lender comfort.</p>
      <h3>Construction Contractors</h3>
      <p>EPC (Engineering, Procurement and Construction) contractors carry construction risk. A fixed-price, fixed-schedule EPC contract with penalties for delays transfers completion risk away from the SPV, protecting lenders.</p>
      <h3>Advisors</h3>
      <p>Financial advisors (often investment banks or specialised firms like CBS Groups), legal counsel, technical experts, insurance advisors, and environmental consultants play essential roles in structuring, due diligence, and closing the transaction.</p>
    </section>

    <section id="risk-assessment">
      <h2>Risk Assessment in Project Finance</h2>
      <p>Lenders evaluate and seek mitigation for multiple risk categories before committing to a project financing:</p>
      <ul>
        <li><strong>Completion Risk:</strong> Risk that the project is not completed on time or within budget. Mitigated by fixed-price EPC contracts, performance bonds, and sponsor completion guarantees.</li>
        <li><strong>Market/Off-take Risk:</strong> Risk that the project's output cannot be sold at projected prices or volumes. Mitigated by long-term off-take agreements with creditworthy buyers.</li>
        <li><strong>Input/Supply Risk:</strong> Risk of unavailability or price volatility of key inputs (fuel, raw materials). Mitigated by long-term supply contracts.</li>
        <li><strong>Regulatory/Political Risk:</strong> Risk of adverse regulatory changes, policy reversals, or government actions. Mitigated by stabilisation clauses, political risk insurance, and DFI participation.</li>
        <li><strong>Operational Risk:</strong> Risk of underperformance of the operating asset. Mitigated by experienced O&M operators, performance guarantees, and reserve accounts.</li>
        <li><strong>Financial Risk:</strong> Interest rate and currency risk. Mitigated by fixed-rate loans or interest rate swaps; hedging for cross-border projects with foreign debt.</li>
      </ul>
    </section>

    <section id="financial-modelling">
      <h2>Financial Modelling for Project Finance</h2>
      <p>The financial model is the cornerstone of a project finance transaction. It simulates the project's cash flows over its entire life under base case, upside, and downside scenarios. Key outputs include:</p>
      <ul>
        <li><strong>Debt Service Coverage Ratio (DSCR):</strong> Annual EBITDA divided by debt service (principal + interest). Minimum DSCR covenant is typically 1.1–1.3x. A higher DSCR provides a larger buffer against adverse scenarios.</li>
        <li><strong>Loan Life Coverage Ratio (LLCR):</strong> NPV of cash flows available for debt service over the loan life, divided by outstanding debt. Typically 1.2–1.5x.</li>
        <li><strong>Project IRR and Equity IRR:</strong> Measures project and equity return viability. Equity sponsors typically target equity IRRs of 15%–20% for infrastructure projects and higher for commercial real estate or manufacturing.</li>
        <li><strong>Break-even Analysis:</strong> Determines minimum revenue levels at which the project services its debt, providing a margin of safety assessment.</li>
      </ul>
      <p>Building a robust, auditable financial model in Microsoft Excel or specialised project finance software is a prerequisite for lender presentations and due diligence.</p>
    </section>

    <section id="india-landscape">
      <h2>Project Finance in India: Current Landscape</h2>
      <p>India's project finance market has matured significantly, with several developments shaping the current landscape:</p>
      <p>The establishment of the National Bank for Financing Infrastructure and Development (NaBFID) in 2021 signals the government's commitment to providing long-tenure, low-cost infrastructure financing that commercial banks are ill-equipped to provide due to asset-liability mismatches.</p>
      <p>Infrastructure Investment Trusts (InvITs) and Real Estate Investment Trusts (REITs) have emerged as important monetisation routes, allowing sponsors to recycle equity from operational assets—creating fresh capital for new project development.</p>
      <p>Renewable energy represents the most active project financing sector in current India, with solar and wind projects generating hundreds of project financings annually. The government's target of 500 GW of renewable capacity by 2030 ensures this pipeline remains robust for years.</p>
    </section>

    <section id="practical-steps">
      <h2>Practical Steps to Access Project Finance</h2>
      <ol>
        <li><strong>Develop a Detailed Project Report (DPR):</strong> A DPR covering technical feasibility, market analysis, financial projections, risk assessment, and implementation schedule is the foundation of any project financing process.</li>
        <li><strong>Structure the SPV:</strong> Incorporate a Special Purpose Vehicle company to hold the project. Ensure appropriate equity capitalisation and shareholding agreements.</li>
        <li><strong>Secure Off-take/Revenue Contracts:</strong> The presence of long-term revenue certainty dramatically improves financing terms.</li>
        <li><strong>Appoint Advisors:</strong> Engage financial advisors, technical experts, and legal counsel early. Their reports are required by lenders for due diligence.</li>
        <li><strong>Approach Lenders:</strong> Present the project to relevant banks and DFIs. CBS Groups can position your project professionally to the most appropriate lending institutions.</li>
        <li><strong>Negotiate Term Sheet:</strong> Agree on key financing parameters—loan amount, interest rate, tenure, security, covenants, and conditions precedent.</li>
        <li><strong>Due Diligence & Documentation:</strong> Lenders conduct technical, legal, environmental, and financial due diligence. Loan documentation is executed after satisfactory DD.</li>
        <li><strong>Financial Close & Drawdown:</strong> Once all conditions precedent are met, the loan is available for drawdown as per the construction progress schedule.</li>
      </ol>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>Project finance is not just for billion-rupee infrastructure behemoths. Increasingly, medium-sized enterprises are using project finance structures for manufacturing plant additions, hospital and hotel developments, cold chain infrastructure, and renewable energy installations. The structured, disciplined approach of project finance—with its emphasis on cash flow visibility, risk allocation, and independent validation—actually improves project management discipline and execution quality.</p>
      <p>CBS Groups has the experience and lender relationships to help you navigate the complexities of project financing. From initial feasibility assessment and financial model preparation to lender presentations and financial close management, our team is your trusted partner in funding your next big venture.</p>
    </section>

    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-2">
        <BlogFAQ q="What is the minimum project size for project finance in India?" a="While there is no hard minimum, most institutional project finance transactions start at ₹10–15 crore of total project cost. For smaller projects, government schemes like SIDBI and CGTMSE term loans are more appropriate. Renewable energy projects are commonly financed from ₹5 crore ticket sizes." />
        <BlogFAQ q="What is an SPV and why is it used in project finance?" a="An SPV (Special Purpose Vehicle) is a separate legal entity created to own and operate a single project. It isolates the project's assets, liabilities, and cash flows from the sponsor's other businesses—protecting the sponsor from project liabilities and protecting lenders from the sponsor's other business risks." />
        <BlogFAQ q="What is a Power Purchase Agreement (PPA) and why does it matter?" a="A PPA is a long-term contract between a power producer and a buyer agreeing on price and volume of electricity purchased. For renewable energy project finance, a 20–25-year PPA with a creditworthy buyer provides revenue certainty lenders need to underwrite the debt." />
        <BlogFAQ q="What is DSCR and what level is considered acceptable?" a="DSCR (Debt Service Coverage Ratio) = EBITDA ÷ Annual Debt Service. A DSCR of 1.0 means cash flows exactly cover debt service with no buffer. Minimum acceptable DSCR for Indian infrastructure lenders is typically 1.1–1.2× in the base case scenario." />
        <BlogFAQ q="Can a first-time developer access project finance?" a="Yes, but with greater scrutiny. First-time developers should have strong technical teams, experienced O&M operators, and robust EPC contractors to compensate for lack of track record. An experienced co-sponsor or a reputable financial advisor like CBS Groups greatly improves bankability." />
        <BlogFAQ q="How long does it take to close a project financing?" a="For mid-sized projects (₹25–₹100 crore), financial close typically takes 3–6 months from first lender engagement. Delays are most often caused by incomplete due diligence documentation, unresolved land acquisition issues, or delays in securing regulatory approvals." />
      </div>
    </section>
  </>
);

// ─── Blog 6 ──────────────────────────────────────────────────────────────────
const blog6Content = (
  <>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>The startup journey is exhilarating—an idea, a team, a product, and a dream of building something significant. But the grim statistical reality is that approximately 90% of startups fail, and financial mismanagement is among the top three causes of failure. Insufficient cash runway, premature scaling, poor unit economics awareness, and inability to raise follow-on funding are financial pitfalls that trap startups across every sector and city.</p>
      <p>Financial planning for startups is not the same as financial planning for established businesses. Startups operate under conditions of profound uncertainty—revenue is yet to be proven, the business model may pivot multiple times, and the relationship between cost and revenue is often non-linear. Yet, paradoxically, rigorous financial planning is more critical in this environment of uncertainty, not less.</p>
      <p>This guide provides a comprehensive framework for startup financial planning—from the day you incorporate your company to the point you achieve sustainable profitability. Whether you are a bootstrapped founder managing your own capital or a funded startup navigating investor expectations, these principles will serve as your financial compass.</p>
    </section>

    <section id="understanding-startup-financials">
      <h2>Understanding Startup Financials: The Three Core Statements</h2>
      <p>Every founder must develop proficiency in reading and interpreting three financial statements:</p>
      <h3>Income Statement (P&L)</h3>
      <p>The income statement shows revenue, costs, and resulting profit or loss over a period. For startups—especially pre-revenue or early-revenue—focus on Gross Margin (Revenue minus Cost of Goods Sold) and EBITDA (Earnings Before Interest, Tax, Depreciation and Amortisation). These metrics strip away financing and accounting effects to reveal operational health. A startup with high gross margins (software: 70%–90%; marketplace: 40%–60%; consumer goods: 30%–50%) has more room to build operating leverage as it scales.</p>
      <h3>Balance Sheet</h3>
      <p>The balance sheet is a snapshot of what the company owns (assets) and what it owes (liabilities), with the difference representing equity. For startups, the most critical balance sheet metric is cash and cash equivalents—your runway. Other key items include deferred revenue (customer cash received in advance—a positive indicator), outstanding receivables (cash owed to you), and total debt (obligations you must service).</p>
      <h3>Cash Flow Statement</h3>
      <p>This is arguably the most important statement for startups. It shows actual cash movement—independent of accounting accruals. A startup can be revenue-positive but cash-negative if customers pay late. The cash flow statement separates operating cash flows, investing cash flows (capex, strategic investments), and financing cash flows (loan drawdowns, equity raises, debt repayments). Negative operating cash flow in early stages is normal; the runway it implies—and the path to positive operating cash flow—is what investors scrutinise.</p>
    </section>

    <section id="financial-modelling">
      <h2>Building a Startup Financial Model</h2>
      <p>A financial model is the quantified expression of your business strategy. It translates assumptions about customer acquisition, pricing, costs, and growth into projected financial statements. Building a credible model is essential for self-assessment, investor communication, and operational decision-making.</p>
      <h3>Top-Down vs. Bottom-Up Modelling</h3>
      <p>Top-down models start with market size and apply an assumed market penetration rate. These models are useful for inspiring investor confidence but are often criticised for being divorced from operational reality. Bottom-up models start with operational drivers—sales reps hired, monthly leads generated, conversion rates, average contract values—and build up to revenue projections. Bottom-up models are more credible and operationally useful.</p>
      <h3>Key Model Assumptions</h3>
      <ul>
        <li><strong>Customer Acquisition Cost (CAC):</strong> Total marketing and sales spend divided by new customers acquired in that period. Knowing your CAC is fundamental to growth planning.</li>
        <li><strong>Lifetime Value (LTV):</strong> The net present value of revenue from a customer over their relationship with your business. An LTV:CAC ratio of 3:1 or higher is generally considered healthy.</li>
        <li><strong>Month-on-Month Growth Rate:</strong> Even a modest 10% MoM growth compounds to 215% annual growth. Your model's growth assumptions must be grounded in your current top-of-funnel capacity.</li>
        <li><strong>Gross Margin:</strong> Model this precisely—it determines how much of each revenue rupee is available to cover operating expenses and generate profit.</li>
        <li><strong>Operating Expense Runway:</strong> Map planned headcount additions, office costs, technology infrastructure, and marketing spend against projected revenue growth. This determines when you will run out of cash and when you need your next funding round.</li>
      </ul>
    </section>

    <section id="cash-runway">
      <h2>Managing Cash Runway</h2>
      <p>Runway is the most important metric for any startup. It is the number of months the company can continue operating at its current burn rate before running out of cash. Running out of cash is existential—even a profitable business on a per-unit basis can die if it runs out of cash before achieving sufficient scale.</p>
      <p><strong>Runway (months) = Cash in Bank / Monthly Net Burn Rate</strong></p>
      <p>Best practice is to maintain at minimum 12 months of runway at all times. Fundraising processes (especially VC equity rounds) typically take 3–9 months from first meeting to funds in bank. Starting fundraising with less than 12 months of runway puts founders in a weak negotiating position and risks running out of capital before a deal is closed.</p>
      <h3>Managing the Burn Rate</h3>
      <p>Burn rate management is about making disciplined trade-offs between investing in growth and preserving optionality. In a growth phase, higher burn rates are justified if each rupee spent is demonstrably accelerating revenue. In uncertain markets or when the business model is still being validated, lower burn rates extend the time available to find product-market fit.</p>
      <p>The COVID-19 crisis was a brutal but instructive lesson in runway management—startups with 18–24 months of runway survived and often emerged stronger. Those with 3–6 months were forced into desperate fundraising or shutdown.</p>
    </section>

    <section id="funding-options">
      <h2>Funding Options for Startups</h2>
      <p>India's startup funding ecosystem has matured considerably. Options available to founders span a wide spectrum:</p>
      <h3>Bootstrapping</h3>
      <p>Self-funding from personal savings or operating revenues is the most control-preserving option. It disciplines founders to find revenue quickly and build lean operations. India has several bootstrap success stories—Zoho, Zerodha, and VWO are among the most celebrated.</p>
      <h3>Friends, Family & Angel Investors</h3>
      <p>Early-stage funding (typically ₹25 lakh–₹2 crore) often comes from founders' personal networks or angel investors. The equity dilution is typically 5%–15%. Angel networks like the Indian Angel Network, LetsVenture, and Ah! Angels provide structured access to early-stage capital.</p>
      <h3>Seed and Series Funding</h3>
      <p>Institutional venture capital (VC) funding scales from Seed (₹1 crore–₹10 crore) through Series A (₹10–₹70 crore) and beyond. VCs typically seek 15%–25% equity ownership per round and look for strong founding teams, large addressable markets, early traction, and differentiated solutions.</p>
      <h3>Startup-Specific Debt</h3>
      <p>Venture debt—offered by specialised lenders like Innoven Capital, Trifecta Capital, and Alteria Capital—provides non-dilutive capital to funded startups as a complement to equity. Typically structured as a term loan with warrants, venture debt extends runway without diluting founders.</p>
      <h3>Government Schemes</h3>
      <p>Startup India offers recognition, income tax exemptions (Section 80-IAC), capital gains tax exemptions, and access to the Fund of Funds managed by SIDBI (₹10,000 crore AUM). The DPIIT Startup India recognition is a prerequisite for most government startup benefits.</p>
    </section>

    <section id="unit-economics">
      <h2>Unit Economics: The Foundation of Scalability</h2>
      <p>Unit economics examines the direct revenues and costs associated with a single unit of business—a customer, a transaction, a delivery, or a subscription. Startups that scale without positive unit economics simply burn more money at scale. This is the central lesson of the 2019–2021 startup funding winter, when investors abruptly shifted focus from gross merchandise value (GMV) to profitability.</p>
      <p>Achieving positive unit economics—where each customer generates more value (LTV) than the cost to acquire and serve them (CAC + COGS)—is the foundational proof that a business model is economically viable. It is the green light to pour growth capital into customer acquisition, knowing that scale drives profitability rather than amplifying losses.</p>
      <p>Tracking and optimising unit economics requires careful cost attribution, cohort analysis of customer retention and spend, and granular channel-level CAC tracking. Investing in financial data infrastructure—good accounting software, an analytics dashboard, and a finance hire with relevant experience—at an early stage pays enormous dividends.</p>
    </section>

    <section id="tax-compliance">
      <h2>Tax Compliance and Financial Governance</h2>
      <p>Financial governance matters more than most startup founders appreciate—particularly when preparing for due diligence in a fundraising round. Key compliance requirements for Indian startups include:</p>
      <ul>
        <li><strong>GST Registration and Filing:</strong> Mandatory above ₹20 lakh annual turnover (₹10 lakh for special category states). Timely GSTR-1 and GSTR-3B filings prevent penalties.</li>
        <li><strong>Income Tax Returns:</strong> Company ITR (Form ITR-6) filed annually by October 31st. Audit under Section 44AB is mandatory above ₹1 crore gross annual revenue.</li>
        <li><strong>TDS Compliance:</strong> Tax deducted at source on employee salaries, vendor payments, and rent must be deposited by the 7th of every month.</li>
        <li><strong>MCA Compliance:</strong> Annual returns (MGT-7), financial statements (AOC-4), and board meeting requirements under the Companies Act, 2013 must be met to avoid penalties and disqualification.</li>
        <li><strong>ESOP Accounting:</strong> Employee Stock Ownership Plans require proper ESOP scheme adoption, accounting under Ind AS 102, and appropriate disclosure.</li>
      </ul>
    </section>

    <section id="conclusion">
      <h2>Conclusion</h2>
      <p>Financial planning is not a constraints-driven exercise that limits creativity—it is a discipline that amplifies your startup's ability to execute its vision. Founders who are financially literate make better decisions at every stage: they know how long their runway is, what growth levers drive unit economics, when to raise capital, and how to structure deals that preserve founder control while attracting excellent capital partners.</p>
      <p>CBS Groups works with funded and bootstrapped startups alike, providing financial strategy advice, debt structuring, lender introductions, and ongoing CFO support. If you are building a startup and want a financial partnership that goes beyond transactional lending, our team is ready to be part of your journey. Contact us today to schedule a financial strategy consultation.</p>
    </section>

    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-2">
        <BlogFAQ q="How much runway should I have before starting to fundraise?" a="At minimum 12 months of runway before beginning fundraising conversations—ideally 15–18 months. Most VC processes take 3–6 months from first meeting to term sheet, plus 1–2 months to close. The best fundraising is done from a position of strength, not desperation." />
        <BlogFAQ q="What is product-market fit (PMF) and when do I know I have it?" a="PMF is the degree to which your product satisfactorily meets strong market demand. Qualitative signals: unsolicited word-of-mouth, customers devastated at the thought of losing your product. Quantitative signals: low churn, rising NPS, and CAC efficiency improving automatically as referrals grow." />
        <BlogFAQ q="When should a startup hire a dedicated CFO or finance person?" a="A part-time CFO becomes essential around Series A when investor reporting and board governance requirements begin. The trigger is: Are complex financial decisions consistently delayed or made badly? That's when a CFO hire pays for itself immediately." />
        <BlogFAQ q="What is venture debt and when should a startup use it?" a="Venture debt is non-dilutive financing (₹1–₹30 crore typically) offered to funded startups, usually with warrants as compensation. It extends runway between equity rounds—allowing startups to hit higher valuation milestones before their next equity raise, thereby reducing dilution." />
        <BlogFAQ q="How do I calculate how much funding I need to raise?" a="Build a detailed 18–24 month financial model showing monthly cash flows. The funding requirement equals the cumulative cash deficit over that period plus a 20%–30% buffer for unforeseen expenses. Raising too little forces an early return to market at potentially worse conditions." />
        <BlogFAQ q="Is the Startup India DPIIT recognition worth pursuing?" a="Absolutely. Benefits include income tax exemption for 3 years under Section 80-IAC, capital gains tax exemption on investments, access to SIDBI's Fund of Funds (₹10,000 crore AUM), simplified insolvency exit, and priority access to government procurement. Application is free at startupindia.gov.in." />
      </div>
    </section>
  </>
);

// ─── Blog Data Registry ───────────────────────────────────────────────────────
const allBlogs: BlogData[] = [
  {
    id: 1,
    title: "Understanding MSME Loans: A Complete Guide",
    excerpt: "Learn everything about MSME loans, eligibility criteria, benefits, and how to apply for funding for your small business.",
    author: "Pradeep Krishna",
    date: "December 15, 2024",
    readTime: "14 min read",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "MSME",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "what-are-msme-loans", title: "What Are MSME Loans?" },
      { id: "types-of-msme-loans", title: "Types of MSME Loans" },
      { id: "eligibility-criteria", title: "Eligibility Criteria" },
      { id: "documents-required", title: "Documents Required" },
      { id: "application-process", title: "Application Process" },
      { id: "interest-rates", title: "Interest Rates & Repayment" },
      { id: "government-schemes", title: "Government Schemes" },
      { id: "common-mistakes", title: "Common Mistakes to Avoid" },
      { id: "conclusion", title: "Conclusion" },
      { id: "faqs", title: "FAQs" },
    ],
    content: blog1Content,
  },
  {
    id: 2,
    title: "Working Capital Management: Best Practices",
    excerpt: "Discover effective strategies for managing working capital to ensure smooth operations and sustainable growth.",
    author: "Financial Team",
    date: "December 10, 2024",
    readTime: "13 min read",
    image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Finance",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "understanding-working-capital", title: "The Working Capital Cycle" },
      { id: "inventory-management", title: "Inventory Management" },
      { id: "receivables-management", title: "Receivables Management" },
      { id: "payables-management", title: "Payables Management" },
      { id: "cash-flow-forecasting", title: "Cash Flow Forecasting" },
      { id: "working-capital-financing", title: "Financing Options" },
      { id: "technology-tools", title: "Technology Tools" },
      { id: "conclusion", title: "Conclusion" },
      { id: "faqs", title: "FAQs" },
    ],
    content: blog2Content,
  },
  {
    id: 3,
    title: "Top 5 Benefits of Business Loans in 2024",
    excerpt: "Explore how business loans can accelerate your company's growth and provide the financial flexibility you need.",
    author: "CBS Groups",
    date: "December 5, 2024",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Business",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "benefit-1-growth-capital", title: "Benefit 1: Growth Capital" },
      { id: "benefit-2-equipment-technology", title: "Benefit 2: Equipment & Tech" },
      { id: "benefit-3-inventory-seasons", title: "Benefit 3: Seasonal Opportunities" },
      { id: "benefit-4-credit-building", title: "Benefit 4: Building Credit" },
      { id: "benefit-5-tax-advantages", title: "Benefit 5: Tax Advantages" },
      { id: "responsible-borrowing", title: "Responsible Borrowing" },
      { id: "conclusion", title: "Conclusion" },
      { id: "faqs", title: "FAQs" },
    ],
    content: blog3Content,
  },
  {
    id: 4,
    title: "CGTMSE Loan Scheme: Collateral-Free Financing",
    excerpt: "Understanding the CGTMSE loan scheme and how it helps small businesses secure funding without collateral.",
    author: "Loan Advisory",
    date: "November 28, 2024",
    readTime: "13 min read",
    image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Loans",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-cgtmse", title: "What is CGTMSE?" },
      { id: "eligible-businesses", title: "Eligible Businesses" },
      { id: "application-process", title: "Application Process" },
      { id: "costand-fees", title: "Costs & Fees" },
      { id: "practical-tips", title: "Practical Tips" },
      { id: "success-stories", title: "Success Stories" },
      { id: "conclusion", title: "Conclusion" },
      { id: "faqs", title: "FAQs" },
    ],
    content: blog4Content,
  },
  {
    id: 5,
    title: "Project Finance: Funding Your Next Big Venture",
    excerpt: "Learn how project finance works and how it can help you fund large-scale projects with structured financing.",
    author: "Project Team",
    date: "November 20, 2024",
    readTime: "15 min read",
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Projects",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "how-project-finance-works", title: "How Project Finance Works" },
      { id: "key-stakeholders", title: "Key Stakeholders" },
      { id: "risk-assessment", title: "Risk Assessment" },
      { id: "financial-modelling", title: "Financial Modelling" },
      { id: "india-landscape", title: "India: Current Landscape" },
      { id: "practical-steps", title: "Practical Steps" },
      { id: "conclusion", title: "Conclusion" },
      { id: "faqs", title: "FAQs" },
    ],
    content: blog5Content,
  },
  {
    id: 6,
    title: "Financial Planning for Startups: Key Steps",
    excerpt: "Essential financial planning strategies every startup needs to build a sustainable business foundation.",
    author: "Startup Advisor",
    date: "November 15, 2024",
    readTime: "15 min read",
    image: "https://images.pexels.com/photos/7567526/pexels-photo-7567526.jpeg?auto=compress&cs=tinysrgb&w=1400",
    category: "Startups",
    sections: [
      { id: "introduction", title: "Introduction" },
      { id: "understanding-startup-financials", title: "The Three Core Statements" },
      { id: "financial-modelling", title: "Building a Financial Model" },
      { id: "cash-runway", title: "Managing Cash Runway" },
      { id: "funding-options", title: "Funding Options" },
      { id: "unit-economics", title: "Unit Economics" },
      { id: "tax-compliance", title: "Tax & Compliance" },
      { id: "conclusion", title: "Conclusion" },
      { id: "faqs", title: "FAQs" },
    ],
    content: blog6Content,
  },
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────
function BlogFAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden not-prose">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800 text-sm leading-snug">{q}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-green-600 shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 pt-2 bg-gray-50 text-gray-700 text-sm leading-7 border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Table of Contents Component ─────────────────────────────────────────────
function TableOfContents({ sections, activeSection }: { sections: Section[]; activeSection: string }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen className="w-4 h-4 text-green-600" />
        <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Table of Contents</span>
      </div>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-green-50 text-green-700 font-semibold border-l-2 border-green-600 pl-4'
                  : 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── CTA Component ────────────────────────────────────────────────────────────
function CTABox() {
  return (
    <div className="not-prose overflow-hidden rounded-2xl shadow-lg border border-green-100"
      style={{ background: "linear-gradient(160deg, #22c55e 0%, #16a34a 60%, #166534 100%)" }}>

      {/* top wave decoration */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
          style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="absolute top-4 right-10 w-16 h-16 rounded-full"
          style={{ background: "rgba(255,255,255,0.10)" }} />
        <div className="absolute -top-4 left-4 w-20 h-20 rounded-full"
          style={{ background: "rgba(255,255,255,0.08)" }} />
        {/* icon */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <Phone className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="px-5 pb-5 text-center">
        <p className="text-[9px] font-extrabold tracking-[0.18em] uppercase text-green-100 mb-2">
          Ready to get started?
        </p>
        <h3 className="text-base font-extrabold text-white leading-snug mb-2.5">
          Get the Right Loan<br />for Your Business
        </h3>
        <p className="text-green-100 text-[0.75rem] leading-5 mb-4">
          Expert advisors. Zero hassle. Fast disbursement.
        </p>

        <div className="flex flex-col gap-2">
          <a
            href="https://wa.me/919841078770"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-green-700 rounded-xl font-bold text-xs shadow hover:shadow-md hover:-translate-y-px active:scale-95 transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            WhatsApp Us Now
          </a>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-white border border-white/30 hover:bg-white/20 active:scale-95 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            Free Consultation
            <ArrowRight className="w-3 h-3 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main BlogPost Component ──────────────────────────────────────────────────
function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [activeSection, setActiveSection] = useState('introduction');

  const blog = allBlogs.find((b) => b.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!blog) return;
    const sectionIds = blog.sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sectionIds.forEach((sid) => {
      const el = document.getElementById(sid);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [blog, id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-3xl font-bold text-gray-800">Blog post not found</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to All Posts
        </Link>
      </div>
    );
  }

  const currentIndex = allBlogs.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto w-full left-0 right-0">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-500/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider w-fit">
            {blog.category}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/75 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left sidebar — sticky TOC */}
          <aside className="hidden lg:block w-60 xl:w-64 shrink-0 lg:sticky lg:top-28">
            <TableOfContents sections={blog.sections} activeSection={activeSection} />
          </aside>

          {/* Article */}
          <article className="flex-1 min-w-0">
            <div className="prose prose-lg prose-green max-w-none [&_h2]:scroll-mt-28 [&_section]:scroll-mt-28
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-100
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-800
              prose-p:text-gray-700 prose-p:leading-8 prose-p:mb-5 prose-p:text-[1.03rem]
              prose-li:text-gray-700 prose-li:leading-7 prose-li:my-1
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-5 prose-ul:space-y-1
              prose-ol:my-5 prose-ol:space-y-2
              prose-img:rounded-2xl prose-img:shadow-md
              prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
            ">
              {blog.content}
            </div>

            {/* Inline CTA between article and navigation */}
            <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Need financing for your business?
                </h3>
                <p className="text-gray-300 mb-6 max-w-xl">
                  CBS Groups has facilitated hundreds of crores in MSME, project, and startup financing. Talk to our experts—no commitment required.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/919841078770"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp: +91 98410 78770
                  </a>
                  <Link
                    to="/msme-loans"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold transition-all duration-200"
                  >
                    Explore Our Loan Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {prevBlog ? (
                <Link
                  to={`/blog/${prevBlog.id}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200/60 hover:border-green-300 hover:shadow-md transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1 font-medium">Previous</p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-2">
                      {prevBlog.title}
                    </p>
                  </div>
                </Link>
              ) : <div />}
              {nextBlog ? (
                <Link
                  to={`/blog/${nextBlog.id}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200/60 hover:border-green-300 hover:shadow-md transition-all duration-300 sm:text-right"
                >
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1 font-medium">Next</p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors line-clamp-2">
                      {nextBlog.title}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : <div />}
            </div>
          </article>

          {/* Right sidebar — sticky CTA */}
          <aside className="hidden xl:block w-56 shrink-0 xl:sticky xl:top-28">
            <CTABox />
          </aside>

        </div>
      </div>
    </div>
  );
}

export default BlogPost;
