program factorial_performance
    implicit none
    integer, parameter :: n = 20
    integer :: result
    real :: start_time, end_time, elapsed_time
    integer :: i

    call cpu_time(start_time)

    result = factorial(n)

    call cpu_time(end_time)
    elapsed_time = end_time - start_time

    print *, "Digits in ", n, "!: ", len(adjustl(to_string(result)))
    print *, "Time taken: ", elapsed_time, " seconds"

contains

    function factorial(n) result(fact)
        integer, intent(in) :: n
        integer :: fact
        integer :: i

        if (n <= 1) then
            fact = 1
        else
            fact = n * factorial(n - 1)
        end if
    end function factorial

    function to_string(n) result(str)
        integer, intent(in) :: n
        character(len=32) :: str
        write(str, '(I32)') n
    end function to_string

end program factorial_performance
