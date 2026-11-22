module fact_module
    implicit none
contains
    recursive function factorial(n) result(res)
        integer :: n, res
        if (n <= 1) then
            res = 1
        else
            res = n * factorial(n - 1)
        end if
    end function factorial

    function digits_in_factorial(n) result(res)
        integer :: n, res
        res = len(trim(adjustl(merge("", "", int(factorial(n), kind=8)))))
    end function digits_in_factorial

end module fact_module

program main
    use fact_module
    implicit none
    integer :: n, i
    integer :: start_time, end_time
    character(len=100) :: str_result

    n = 20

    start_time = MPI_WTIME()
    str_result = adjustl(merge("", "", int(factorial(n), kind=8)))
    end_time = MPI_WTIME()

    print *, "Digits in ", n, "! : ", len_trim(str_result)
    print *, "Time taken : ", end_time - start_time, " seconds"

end program main
!
! Note: The above Fortran code assumes MPI environment for timing purposes.
!       If running without MPI, timing can be simplified or removed.
!
