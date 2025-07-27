# Mini Project: Text Analyzer & Cleaner (Node.js + Regex)

## Overview
- Build a Text Analyzer & Cleaner: a Node.js script that processes messy strings and extracts or cleans specific information using regular expressions.

<h4>Reinforces:</h4>

- ES module syntax

- Custom utility modules

- Regex practice

- Third-party packages

- npm start scripts

<h4>Objectives</h4>

- Use regex for string analysis and cleanup

- Practice importing and exporting custom modules

- Use a third-party npm package (e.g., chalk)

- Structure a clean Node.js project with working npm start














## EMAIL VALIDATION

Here’s a regular expression (regex) to match and validate email addresses. It ensures the email follows a standard format like example@domain.com:

Copy the code
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

Explanation:
^ and $: Ensure the match starts and ends with the email string.
[a-zA-Z0-9._%+-]+: Matches the local part of the email (before the @), allowing letters, numbers, dots, underscores, and special characters like %, +, and -.
@: Matches the @ symbol.
[a-zA-Z0-9.-]+: Matches the domain name, allowing letters, numbers, dots, and hyphens.
\.[a-zA-Z]{2,}: Matches the top-level domain (e.g., .com, .org), requiring at least two letters.
Example Matches:
Valid: user.name@example.com, user+123@sub.domain.org
Invalid: user@domain, user@.com

While this regex works for most cases, remember that email validation should ideally include additional checks (e.g., DNS validation) for complete accuracy.

## PHONE NUMBER HIDE

Here are three examples of regular expressions to hide or mask phone numbers. These examples assume different formats and use cases:

1. Masking All Digits Except the Last Four

This regex replaces all digits except the last four with asterisks (*):

Copy the code
(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})


Replacement Pattern:

Copy the code
***-***-$3

2. Masking Only the Middle Digits

This regex keeps the area code and last four digits visible, masking the middle digits:

Copy the code
(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})


Replacement Pattern:

Copy the code
$1-***-$3

3. Masking Entire Phone Number

This regex hides the entire phone number, replacing it with a generic placeholder:

Copy the code
(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})


Replacement Pattern:

Copy the code
***-***-****

Example in Code (e.g., Python):
Copy the code
import re

# Example phone number
phone_number = "(123) 456-7890"

# Masking all digits except the last four
masked_number = re.sub(r'(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})', r'***-***-\3', phone_number)
print(masked_number)  # Output: ***-***-7890


Feel free to adapt these patterns based on your specific format or requirements!
