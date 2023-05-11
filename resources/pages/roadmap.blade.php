@extends('pages.layout.app2')
@section('content')


    <main>
        <!-- sectio content begin -->
        <div class="uk-section">
            <div class="uk-container">
                <div class="uk-grid">
                    <div class="uk-width-1-1 uk-flex uk-flex-center">
                        <div class="uk-width-3-4@m uk-margin-medium-bottom">
                            <p class="uk-text-lead">We're constantly updating our roadmap to bring transparency for our users and to get your feedback - please tell us what is important for you!</p>

                        </div>
                    </div>
                    <div class="uk-width-1-1 in-timeline-1">
                        <hr>
                        <div class="uk-grid-medium uk-child-width-1-1 uk-child-width-1-3@m uk-grid" data-uk-grid="">
                            <div class="uk-first-column">
                                <div class="in-timeline-branch">
                                    <div class="uk-flex">
                                        <i class="fas fa-clipboard-check fa-lg in-icon-wrap"></i>
                                        <div class="in-timeline-title uk-flex uk-flex-middle">
                                            <h4 class="uk-margin-remove-bottom">2017-2018</h4>
                                            <span class="uk-label uk-label-success uk-text-small uk-border-rounded">completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-box-shadow-small uk-width-expand">
                                    <div class="uk-card uk-card-default uk-card-body uk-card-small uk-border-rounded">
                                        <ul class="uk-list uk-list-bullet in-list-check">
                                            <li>Wireframe</li>
                                            <li>Design</li>
                                            <li>Documentation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="in-timeline-branch">
                                    <div class="uk-flex">
                                        <i class="fas fa-cog fa-lg in-icon-wrap"></i>
                                        <div class="in-timeline-title uk-flex uk-flex-middle">
                                            <h4 class="uk-margin-remove-bottom">2019-2020</h4>
                                            <span class="uk-label uk-text-small uk-border-rounded">on progress</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-box-shadow-small uk-width-expand">
                                    <div class="uk-card uk-card-default uk-card-body uk-card-small uk-border-rounded">
                                        <ul class="uk-list uk-list-bullet in-list-check">
                                            <li>Chart with base functional</li>
                                            <li>Launching plans and billings</li>
                                            <li>Improvement of the rest of the functions of the Chart</li>
                                            <li>Availability panel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="in-timeline-branch">
                                    <div class="uk-flex">
                                        <i class="fas fa-flask fa-lg in-icon-wrap"></i>
                                        <div class="in-timeline-title uk-flex uk-flex-middle">
                                            <h4 class="uk-margin-remove-bottom">2020-2021</h4>
                                            <span class="uk-label uk-label-warning uk-text-small uk-border-rounded">planned</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-box-shadow-small uk-width-expand">
                                    <div class="uk-card uk-card-default uk-card-body uk-card-small uk-border-rounded">
                                        <ul class="uk-list uk-list-bullet in-list-check">
                                            <li>Extensions for other popular browsers</li>
                                            <li>List View for your tasks</li>
                                            <li>Apps for iOS &amp; Android</li>
                                            <li>New cool skin for Default View</li>
                                            <li>Community formation and the subsequent cyclic completion of the product based on the wishes of customers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- section content end -->
    </main>

@endsection