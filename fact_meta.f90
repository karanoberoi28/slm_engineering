! fact.f90
! Calculates the factorial of a given number and prints the result
! along with the time taken to calculate it

! Module to handle input/output operations
MODULE io_module
    INTEGER, PARAMETER :: STDOUT = 6
CONTAINS
    SUBROUTINE write_string(string, n)
        CHARACTER(len=LEN(string)), INTENT(IN) :: string
        INTEGER, INTENT(IN) :: n
        WRITE(STDOUT, '(A)') string
    END SUBROUTINE write_string
END MODULE io_module

! Module to handle time operations
MODULE time_module
    INTEGER, PARAMETER :: CLOCK_ID = 0
CONTAINS
    FUNCTION get_time() RESULT(time)
        REAL :: time
        CALL system('gettime %lf', time)
    END FUNCTION get_time
END MODULE time_module

! Module to handle mathematical operations
MODULE math_module
    INTEGER FUNCTION factorial(n)
        INTEGER, INTENT(IN) :: n
        IF (n <= 1) THEN
            factorial = 1
        ELSE
            factorial = factorial(n - 1) * n
        END IF
    END FUNCTION factorial
END MODULE math_module

PROGRAM main
    USE io_module
    USE time_module
    USE math_module

    INTEGER :: n
    REAL :: start, end_time

   ! Read the input number from the command line
    IF (IARGC() < 1) THEN
        WRITE(*, '(A)') 'Please provide an input number'
        STOP
    END IF

    n = IARGC()
    IARGC()

   ! Calculate the factorial
    start = get_time()

   ! Calculate the factorial using a loop
   ! This is the most efficient way to calculate the factorial in Fortran
    CALL factorial(n)

   ! Calculate the factorial using recursion
   ! This is not the most efficient way to calculate the factorial in Fortran
   ! But it is useful for illustration purposes
   ! CALL factorial(n)

    end_time = get_time()

   ! Print the result and the time taken
    WRITE_STRING('Digits in ', n, ': ', LEN(str(REAL(factorial(n)))), ')')
    WRITE_STRING('Time taken: ', end_time - start, ') seconds')

END PROGRAM main
