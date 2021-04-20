import React from 'react';

const Navbar = () => {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg bg-dark ">
                <div class="container-fluid text-white">
                    <a class="navbar-brand " href="/">Road Skills School</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/lesson">lesson</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/dashboard">Deshboard</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/appointment" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    AppointMent
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="/login" tabindex="-1" aria-disabled="true">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;