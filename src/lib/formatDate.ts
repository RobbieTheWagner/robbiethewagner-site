/**
 * Format a date into a consistent, readable string format
 * @param date - A Date object or date string to format
 * @returns A formatted date string (e.g., "January 1, 2023")
 */
export function formatDate(date: Date | string | number): string {
  try {
    // Convert to Date object if it's not already one
    const dateObj = date instanceof Date ? date : new Date(date);
    
    // Check if the date is valid
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date provided');
    }
    
    // Format the date using Intl.DateTimeFormat for localization support
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(dateObj);
  } catch (error) {
    console.error(`Error formatting date: ${error}`);
    return 'Invalid date';
  }
}

/**
 * Format a date with additional options for more flexible formatting
 * @param date - A Date object or date string to format
 * @param options - Intl.DateTimeFormatOptions to customize the format
 * @returns A formatted date string according to the provided options
 */
export function formatDateWithOptions(
  date: Date | string | number, 
  options: Intl.DateTimeFormatOptions = {}
): string {
  try {
    const dateObj = date instanceof Date ? date : new Date(date);
    
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date provided');
    }
    
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
  } catch (error) {
    console.error(`Error formatting date: ${error}`);
    return 'Invalid date';
  }
}

